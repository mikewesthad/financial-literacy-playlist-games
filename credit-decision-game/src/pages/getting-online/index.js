import React, { Component } from "react";
import { Prompt, PromptSection, PromptButton, PromptImage } from "../../components/decision";
import { EnableAlertsResult, SkipAlertsResult } from "./results";
import Page from "../../components/page";
import computerImage from "../../images/gifs/computer-2.gif";
import "./style.css";

export default class PlasticMail extends Component {
  state = {
    decision: null
  };

  chooseEnableAlerts = () => {
    this.props.gameData.incrementCreditPower(10);
    this.setState({ decision: "alerts" });
  };

  chooseSkipAlerts = () => {
    this.props.gameData.incrementCreditPower(-10);
    this.setState({ decision: "no alerts" });
  };

  render() {
    const { nextRoute } = this.props;
    const { decision, paidInFull } = this.state;

    let contents;
    if (decision !== null) {
      if (decision === "alerts") contents = <EnableAlertsResult nextRoute={nextRoute} />;
      else contents = <SkipAlertsResult nextRoute={nextRoute} />;
    } else {
      contents = (
        <Prompt title="Getting Online">
          <PromptSection>
            <PromptImage src={computerImage} />
            <p>
              After last month, you realize you should have registered an online account with your
              credit card company. You log on and see an option for enabling alerts for when you
              card is used. What do you do?
            </p>
          </PromptSection>
          <PromptSection className="text-center card-choice">
            <PromptButton onClick={this.chooseEnableAlerts}>Enable Alerts</PromptButton>
            <PromptButton onClick={this.chooseSkipAlerts}>Skip Alerts</PromptButton>
          </PromptSection>
        </Prompt>
      );
    }

    return <Page transitionKey={decision}>{contents}</Page>;
  }
}
