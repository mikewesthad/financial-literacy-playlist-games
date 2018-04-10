import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Prompt, PromptSection, PromptButton, PromptImage } from "../../components/decision";
import Results from "../../components/results/";
import Page from "../../components/page";
import determinedImage from "../../images/gifs/determined.gif";

export default class Intro extends Component {
  state = {
    introNumber: 0
  };

  goToNext = () => {
    this.setState({ introNumber: 1 });
  };

  render() {
    const { nextRoute } = this.props;
    const { introNumber } = this.state;

    let content;
    if (introNumber === 0) {
      content = (
        <Prompt title="Credit Power XP">
          <PromptSection>
            <p>
              Your <em>credit record</em> is the history of your current & past borrowing and
              payment activities - including loans, credit cards and some utility payments. Having a
              good credit record is important for renting an apartment, getting a car loan and even
              sometimes for getting a job.
            </p>
            <p>
              Your <em>credit score</em> is a number that represents the quality of your credit and
              payment history. In this game <em>credit power</em> is an approximation of credit
              score.
            </p>
            <p>Ready to build up some credit?</p>
          </PromptSection>
          <PromptSection className="text-center">
            <PromptButton onClick={this.goToNext}>Play</PromptButton>
          </PromptSection>
        </Prompt>
      );
    } else {
      content = (
        <Prompt title="First Apartment">
          <PromptSection>
            <p>
              You are getting ready to move out. You look at an apartment, but the landlord does a
              credit check on you. They tell you that you have no credit and that they can’t rent to
              you until you build your credit.
            </p>
            <p>
              You’ve had a job and a debit card for a while now, but you learn that you need to get
              a credit card to start building your credit... You set your sights on the apartment
              and start building your credit.
            </p>
            <PromptImage src={determinedImage} alt="" />
          </PromptSection>
          <PromptSection className="text-center">
            <Link to={nextRoute} className="button">
              Continue
            </Link>
          </PromptSection>
        </Prompt>
      );
    }

    return <Page transitionKey={this.state.introNumber}>{content}</Page>;
  }
}
