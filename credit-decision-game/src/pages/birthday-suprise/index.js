import React, { Component } from "react";
import { Prompt, PromptSection, PromptButton } from "../../components/decision";
import Results from "../../components/results/";
import Page from "../../components/page";
import birthdayImage from "../../images/gifs/birthday.gif";

export default class BirthdaySurprise extends Component {
  state = {
    showResult: false
  };

  goToResult = () => {
    this.props.gameData.incrementSavings(100);
    this.setState({ showResult: true });
  };

  render() {
    const { nextRoute } = this.props;

    let contents;
    if (this.state.showResult) {
      contents = (
        <Results
          title="Surprise Savings"
          message="You save the $100 and enjoy your birthday."
          nextRoute={nextRoute}
        />
      );
    } else {
      contents = (
        <Prompt title="Birthday Surprise">
          <PromptSection>
            <img
              style={{ maxWidth: "25%", display: "block", margin: "0 auto" }}
              src={birthdayImage}
              alt=""
            />
            <p>
              Smooth sailing this month. You paid your bill on time and in full. Since it was your
              birthday this month, your aunt and uncle sent you a check for $100.
            </p>
          </PromptSection>
          <PromptSection className="text-center">
            <PromptButton onClick={this.goToResult}>Continue</PromptButton>
          </PromptSection>
        </Prompt>
      );
    }

    return <Page transitionKey={this.state.showResult}>{contents}</Page>;
  }
}
