import React, { Component } from "react";
import { Prompt, PromptSection, PromptButton, PromptImage } from "../../components/decision";
import { PaidInFullResult, PartiallyPaidResult, SkipPaymentResult } from "./results";
import Page from "../../components/page";
import sickImage from "../../images/gifs/sick.gif";

const billAmount = 400;

export default class TheFluStrikes extends Component {
  state = {
    decision: null,
    paidInFull: false
  };

  chooseSavings = () => {
    const paidInFull = billAmount <= this.props.gameData.savings;
    this.props.gameData.incrementSavings(-Math.min(billAmount, this.props.gameData.savings));
    this.props.gameData.incrementCreditPower(paidInFull ? 10 : 5);
    this.setState({ decision: "savings", paidInFull });
  };

  chooseSkipPayment = () => {
    this.props.gameData.incrementCreditPower(-10);
    this.setState({ decision: "skip" });
  };

  render() {
    const { nextRoute } = this.props;
    const { decision, paidInFull } = this.state;

    let contents;
    if (decision === "savings") {
      if (paidInFull) contents = <PaidInFullResult nextRoute={nextRoute} />;
      else contents = <PartiallyPaidResult nextRoute={nextRoute} />;
    } else if (decision === "skip") {
      contents = <SkipPaymentResult nextRoute={nextRoute} />;
    } else {
      const savings = this.props.gameData.savings;
      let message;
      let options = [
        <PromptButton key="skip" onClick={this.chooseSkipPayment}>
          Skip Paying
        </PromptButton>
      ];
      if (savings <= 0) {
        message = "You don't have any savings left... ";
      } else if (savings < billAmount) {
        message = "You don't have enough savings to cover the whole bill. What do you do?";
        options.push(
          <PromptButton key="save" onClick={this.chooseSavings}>
            Use Savings
          </PromptButton>
        );
      } else {
        message = "You have enough savings to cover the whole bill. What do you do?";
        options.push(
          <PromptButton key="save" onClick={this.chooseSavings}>
            Use Savings
          </PromptButton>
        );
      }

      contents = (
        <Prompt title="The Flu Strikes">
          <PromptSection>
            <PromptImage src={sickImage} alt="" />
            <p>
              You got sick and had to take off work. Unfortunately, that means your paycheck is
              lighter. You were counting on that to pay off your credit card. You are ${billAmount}{" "}
              short...
            </p>
            <p>{message}</p>
          </PromptSection>
          <PromptSection className="text-center">{options}</PromptSection>
        </Prompt>
      );
    }

    return <Page transitionKey={decision}>{contents}</Page>;
  }
}
