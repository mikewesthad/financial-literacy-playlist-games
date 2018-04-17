import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Prompt, PromptSection, PromptButton, PromptImage } from "../../components/decision";
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
              Your <u>credit record</u> is the history of your current & past borrowing and payment
              activities - including loans, credit cards and some utility payments. Having a good
              credit record is important for renting an apartment, getting a car loan and even
              sometimes for getting a job.
            </p>
            <p>
              In this game, <u>credit power</u> will increase as you make choices that help build
              and maintain your credit.
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
              You’ve had a job and a debit card for a while now, but you decide to get a credit card
              to build your credit... You set your sights on that apartment and start building your
              credit.
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
