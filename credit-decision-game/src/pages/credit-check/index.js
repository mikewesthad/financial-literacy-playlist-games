import React, { Component } from "react";
import { Prompt, PromptSection, PromptImage } from "../../components/decision";
import Page from "../../components/page";
import happyImage from "../../images/gifs/happy.gif";

export default class CreditCheck extends Component {
  render() {
    const { gameData } = this.props;
    const creditPower = gameData.creditPower;

    let feedback;
    if (creditPower >= 90) {
      feedback = "Great job! You got a perfect score.";
    } else if (creditPower >= 50) {
      feedback =
        "You did a great job, but thre were a couple things you could have done better. Go back and see if you can get a perfect score!";
    } else {
      feedback =
        "Looks like you can make some better choices, go back and see if you can get a perfect score!";
    }

    return (
      <Page>
        <Prompt title="Final Score">
          <PromptSection>
            <PromptImage src={happyImage} />
            <p>
              It’s been a year since that first credit check when you went to look at an apartment.
              Let's see how you did.
            </p>
            <p>
              Final credit power: <strong>{creditPower}</strong>
            </p>
            <p>{feedback}</p>
            <p>Close this tab and return to LRNG to complete this XP.</p>
          </PromptSection>
          <PromptSection className="text-center">
            <button onClick={() => window.location.reload()} className="button">
              Play Again?
            </button>
          </PromptSection>
        </Prompt>
      </Page>
    );
  }
}
