import React, { Component } from "react";
import { Prompt, PromptSection, PromptButton } from "../../components/decision";
// import { GoodResult, BadResult } from "./results";
import Page from "../../components/page";
import Checkbox from "./checkbox";
import callIcon from "../../images/icons/call-icon.svg";
import "./style.css";

const MODES = {
  PROMPT: "prompt",
  SELECTING: "selecting",
  FEEDBACK: "feedback",
  RESULTS: "results"
};

const items = [
  { Description: "Netflix", Amount: 15, Date: "04-25-18" },
  { Description: "Groceries", Amount: 75, Date: "04-25-18" },
  { Description: "Taxi", Amount: 75, Date: "04-25-18" },
  { Description: "Clothes", Amount: 50, Date: "04-25-18" }
];

const BillTable = ({ data, labels, onClick, selected, answers }) => {
  if (data.length === 0) return null;
  return (
    <table className="bill-table">
      <thead>
        <tr className="bill-table__header-row">
          {labels.map(label => (
            <th className="bill-table__header" key={label}>
              {label}
            </th>
          ))}
          <th className="bill-table__header" key="dispute">
            Dispute?
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr className="bill-table__data-row" key={i}>
            {labels.map((label, j) => (
              <td className="bill-table__data" key={`${i}-${j}`}>
                {row[label]}
              </td>
            ))}
            <td className="bill-table__data" key={`${i}-dispute}`}>
              <Checkbox
                checked={selected.includes(data[i].Description)}
                className="bill-table__checkbox"
                onClick={() => onClick(data[i])}
              />
              {/* <span class="bill-table__feedback bill-table__feedback--good">Correct!</span> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default class TransactionDetective extends Component {
  state = {
    mode: MODES.PROMPT,
    selected: []
  };

  goToNextMode = () => {
    const { mode } = this.state;
    if (mode === MODES.PROMPT) this.setState({ mode: MODES.SELECTING });
    else if (mode === MODES.SELECTING) this.setState({ mode: MODES.FEEDBACK });
    else if (mode === MODES.FEEDBACK) this.setState({ mode: MODES.RESULTS });
  };

  toggleSelected = item => {
    const name = item.Description;
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
    const { mode, selected } = this.state;

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
    } else if (mode === MODES.SELECTING) {
      contents = (
        <div className="fullwidth">
          <PromptSection>
            <p style={{ color: "white" }}>
              Click the box in the last column to select transactions that you didn't make, and then
              click the button to call the credit card company.
            </p>
          </PromptSection>
          <BillTable
            data={items}
            labels={["Date", "Description", "Amount"]}
            onClick={this.toggleSelected}
            selected={selected}
          />
          <PromptSection>
            <div className="text-center">
              <button className="button" onClick={this.goToNextMode}>
                Call Company
              </button>
            </div>
          </PromptSection>
        </div>
      );
    } else if (mode === MODES.RESULTS) {
      contents = (
        <div className="fullwidth">
          <PromptSection>
            <p style={{ color: "white" }}>Nice job!</p>
          </PromptSection>
          <BillTable
            data={items}
            labels={["Date", "Description", "Amount"]}
            onClick={this.toggleSelected}
            selected={selected}
          />
          <PromptSection>
            <div className="text-center">
              <button className="button" onClick={this.goToNextMode}>
                Call Company
              </button>
            </div>
          </PromptSection>
        </div>
      );
    } else {
      contents = null;
    }

    return <Page transitionKey={this.state.mode}>{contents}</Page>;
  }
}
