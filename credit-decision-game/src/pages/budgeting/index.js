import React, { Component } from "react";
import { Prompt, PromptSection } from "../../components/decision";
import Page from "../../components/page";
import "./style.css";
import LabeledBar from "./labeled-bar";
import CartItem from "./cart-item";
import { NoChangeResult, DecentResult, GreatResult, BadResult } from "./results";
import { items, itemLookup } from "./item-info";

export default class Budgeting extends Component {
  state = {
    itemsSelected: [],
    finishedSelecting: false
  };

  getTotal() {
    return this.state.itemsSelected.reduce(
      (runningTotal, itemName) => (runningTotal += itemLookup[itemName].cost),
      0
    );
  }

  toggleItem = name => {
    this.setState(prevState => {
      const itemsSelected = prevState.itemsSelected;
      if (itemsSelected.includes(name)) {
        return { itemsSelected: itemsSelected.filter(item => item !== name) };
      } else {
        return { itemsSelected: [...itemsSelected, name] };
      }
    });
  };

  finishSelection = () => {
    const total = this.getTotal();
    const percent = total / 500 * 100;
    this.props.gameData.setTransactions([...this.state.itemsSelected]);
    if (percent === 0) this.props.gameData.incrementCreditPower(0);
    else if (percent <= 20) this.props.gameData.incrementCreditPower(5);
    else if (percent <= 35) this.props.gameData.incrementCreditPower(10);
    else this.props.gameData.incrementCreditPower(-5);
    this.setState({ finishSelection: true });
  };

  render() {
    const { nextRoute, iterationNumber } = this.props;
    const { itemsSelected, finishSelection } = this.state;
    const total = this.getTotal();

    let contents;
    if (finishSelection) {
      const percent = total / 500 * 100;
      if (percent === 0) contents = <NoChangeResult nextRoute={nextRoute} />;
      else if (percent <= 20) contents = <DecentResult nextRoute={nextRoute} />;
      else if (percent <= 35) contents = <GreatResult nextRoute={nextRoute} />;
      else contents = <BadResult nextRoute={nextRoute} />;
    } else {
      let title;
      if (iterationNumber === 0) title = "Budgeting & Charging";
      else if (iterationNumber === 1) title = "Charging Revisited";
      else if (iterationNumber === 2) title = "Charging: One Last Time";

      let message;
      if (iterationNumber === 0) {
        message = (
          <p>
            Time to use your card. You have a $500 dollar credit limit, and you have a number of
            items in your budget that you’ll be buying one way or another. So what will you put on
            your card this month?
          </p>
        );
      } else if (iterationNumber === 1) {
        message = (
          <p>
            You'll want to keep using your card each month. So what will you put on your card this
            month?
          </p>
        );
      } else {
        message = <p>Once more - what will you put on your card this month?</p>;
      }

      contents = (
        <div className="fullwidth">
          <Prompt title={title}>
            <PromptSection>{message}</PromptSection>
          </Prompt>
          <div className="cart">
            {items.map(item => {
              return (
                <CartItem
                  key={item.name}
                  name={item.name}
                  cost={item.cost}
                  isSelected={itemsSelected.includes(item.name)}
                  image={item.image}
                  onToggle={() => this.toggleItem(item.name)}
                />
              );
            })}
          </div>

          <h1
            className="text-center"
            style={{ color: "white", fontSize: "1.6rem", fontWeight: 400 }}
          >
            Total Cost: ${total}
          </h1>
          <h1
            className="text-center"
            style={{ color: "white", fontSize: "1.6rem", fontWeight: 400 }}
          >
            Percent of Credit Limit Used:
          </h1>
          <LabeledBar value={total} maxValue={500} format={value => `${value.toFixed(0)}%`} />

          <div className="text-center">
            <button className="button" onClick={this.finishSelection}>
              Set Budget
            </button>
          </div>
        </div>
      );
    }

    return <Page transitionKey={this.state.finishSelection}>{contents}</Page>;
  }
}
