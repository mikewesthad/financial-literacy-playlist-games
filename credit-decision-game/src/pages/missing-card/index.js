import React, { Component } from "react";
import { Prompt, PromptSection, PromptButton, PromptImage } from "../../components/decision";
import { CancelResult, WaitResult } from "./results";
import Page from "../../components/page";
import confusedImage from "../../images/gifs/confused.gif";

export default class PlasticMail extends Component {
  state = {
    decision: null
  };

  chooseWait = () => {
    this.props.gameData.incrementCreditPower(-10);
    this.setState({ decision: "wait" });
  };

  chooseCancel = () => {
    this.props.gameData.incrementCreditPower(10);
    this.setState({ decision: "cancel" });
  };

  render() {
    const { nextRoute } = this.props;
    const { decision } = this.state;

    let contents;
    if (decision !== null) {
      if (decision === "cancel") contents = <CancelResult nextRoute={nextRoute} />;
      else contents = <WaitResult nextRoute={nextRoute} />;
    } else {
      contents = (
        <Prompt title="Missing Card">
          <PromptSection>
            <PromptImage src={confusedImage} alt="" />
            <p>
              You weren’t able to find your card when you got home from work this evening. You can
              either call the credit card company to cancel the card and get a new one, or wait and
              hope your card turns up.
            </p>
          </PromptSection>
          <div className="text-center">
            <PromptButton onClick={this.chooseWait}>Wait</PromptButton>
            <PromptButton onClick={this.chooseCancel}>Cancel Card</PromptButton>
          </div>
        </Prompt>
      );
    }

    return <Page transitionKey={decision}>{contents}</Page>;
  }
}
