import React, { Component } from "react";
import { Prompt, PromptSection } from "../../components/decision";
import { GoodResult, DisputedIncorrectlyResult, MissedFraudResult } from "./results";
import Page from "../../components/page";
import { fakeItems, itemLookup } from "../budgeting/item-info";
import BillTable from "./bill-table";
import Checkbox from "./checkbox";
import "./style.css";

const MODES = {
  PROMPT: "prompt",
  SELECTING: "selecting",
  FEEDBACK: "feedback",
  RESULTS: "results"
};

const tableMapping = [
  { key: "date", label: "Date" },
  { key: "name", label: "Description" },
  { key: "cost", label: "Amount", formatter: val => `$${val}` }
];

const LastColumn = ({ selected, fakeItemNames, rowIndex, data, showFeedback, onClick }) => {
  const itemName = data[rowIndex].name;
  const isSelected = selected.includes(itemName);
  const isFake = fakeItemNames.includes(itemName);
  const onCheckClick = () => onClick(itemName);

  let feedback;
  if (showFeedback) {
    let text = "";
    let className = "bill-table__feedback--";
    if (isSelected && isFake) {
      text = "Nice - fraud caught!";
      className += "good";
    } else if (isSelected && !isFake) {
      text = "Wrong! You made this one.";
      className += "bad";
    } else if (!isSelected && isFake) {
      text = "Uh oh - Fraud missed!";
      className += "bad";
    }
    feedback = <div className={`bill-table__feedback ${className}`}>{text}</div>;
  }

  return (
    <React.Fragment>
      <Checkbox
        checked={selected.includes(data[rowIndex].name)}
        className="bill-table__checkbox"
        onClick={showFeedback ? undefined : onCheckClick}
        disabled={showFeedback}
      />
      {feedback}
    </React.Fragment>
  );
};

export default class TransactionDetective extends Component {
  state = {
    mode: MODES.PROMPT,
    selected: [],
    transactions: [],
    fakeItemNames: []
  };

  componentDidMount() {
    // Take only four purchased items
    const purchasedItemNames = this.props.gameData.transactions.slice(0, 4);
    const fakeItemNames = fakeItems.map(elem => elem.name);
    const itemNames = [...purchasedItemNames, ...fakeItemNames];
    const shuffledNames = itemNames
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
    const transactions = shuffledNames.map(itemName => ({
      ...itemLookup[itemName],
      date: "04-28"
    }));
    this.setState({ fakeItemNames, transactions });
  }

  goToNextMode = () => {
    const { mode } = this.state;
    if (mode === MODES.PROMPT) this.setState({ mode: MODES.SELECTING });
    else if (mode === MODES.SELECTING) this.setState({ mode: MODES.RESULTS });
    else if (mode === MODES.RESULTS) {
      const { selected, fakeItemNames } = this.state;
      const allFakeCaught = fakeItemNames.every(name => selected.includes(name));
      const onlyFakeCaught = selected.every(name => fakeItemNames.includes(name));
      if (allFakeCaught && onlyFakeCaught) this.props.gameData.incrementCreditPower(10);
      else this.props.gameData.incrementCreditPower(-10);
      this.setState({ mode: MODES.FEEDBACK });
    }
  };

  toggleSelected = name => {
    this.setState(prevState => {
      const selected = prevState.selected;
      if (selected.includes(name)) {
        return { selected: selected.filter(item => item !== name) };
      } else {
        return { selected: [...selected, name] };
      }
    });
  };

  render() {
    const { nextRoute } = this.props;
    const { mode, selected, transactions, fakeItemNames } = this.state;

    let contents;
    if (mode === MODES.PROMPT) {
      contents = (
        <Prompt title="Transaction Detective">
          <PromptSection>
            <p>
              You remember what you put on your card last month, right? Looking at your credit card
              balance today, you think something might be off.
            </p>
          </PromptSection>
          <div className="text-center">
            <button className="button" onClick={this.goToNextMode}>
              Review Bill
            </button>
          </div>
        </Prompt>
      );
    } else if (mode === MODES.SELECTING || mode === MODES.RESULTS) {
      let header;
      const style = { textAlign: "center", color: "white", marginTop: 0, fontSize: "1.4rem" };
      if (mode === MODES.SELECTING)
        header = (
          <p style={style}>
            Click the box in the last column to select transactions that you didn't make, and then
            click the button to call the credit card company.
          </p>
        );
      else if (mode === MODES.RESULTS) {
        if (
          selected.length === fakeItemNames.length &&
          selected.every(name => fakeItemNames.includes(name))
        ) {
          header = <p style={style}>You caught everything!</p>;
        } else {
          header = <p style={style}>You missed something!</p>;
        }
      }
      contents = (
        <div className="fullwidth">
          {header}
          <BillTable
            data={transactions}
            mapping={tableMapping}
            onClick={this.toggleSelected}
            selected={selected}
            LastColumn={props => (
              <LastColumn
                selected={selected}
                fakeItemNames={fakeItemNames}
                showFeedback={mode === MODES.RESULTS}
                onClick={this.toggleSelected}
                {...props}
              />
            )}
          />
          <PromptSection>
            <div className="text-center">
              <button className="button" onClick={this.goToNextMode}>
                {mode === MODES.SELECTING ? "Call Company" : "Continue"}
              </button>
            </div>
          </PromptSection>
        </div>
      );
    } else {
      const allFakeCaught = fakeItemNames.every(name => selected.includes(name));
      const onlyFakeCaught = selected.every(name => fakeItemNames.includes(name));
      if (allFakeCaught && onlyFakeCaught) {
        contents = <GoodResult nextRoute={nextRoute} />;
      } else if (!allFakeCaught) {
        contents = <MissedFraudResult nextRoute={nextRoute} />;
      } else {
        contents = <DisputedIncorrectlyResult nextRoute={nextRoute} />;
      }
    }

    return <Page transitionKey={this.state.mode}>{contents}</Page>;
  }
}
