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
      feedback =
        "Perfect score! When you look for an apartment again, you find one right away and the landlord compliments you on your credit power.";
    } else if (creditPower >= 30) {
      feedback =
        "Nice job! That's a pretty good credit power. When you look for an apartment again, you find a nice one, but miss out on your top choice. Go back and see if you can get a perfect score of 90!";
    } else {
      feedback =
        "Looks like you can make some better choices. When you look for an apartment again, you are told you still need to build up your credit. Go back and see if you can get a perfect score of 90!";
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
            <p className="outro">Close this tab and return to LRNG to complete this XP.</p>
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
