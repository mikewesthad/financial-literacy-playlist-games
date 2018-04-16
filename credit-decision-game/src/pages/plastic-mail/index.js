import React, { Component } from "react";
import { Prompt, PromptSection, PromptButton } from "../../components/decision";
import { OneNewCardResult, NoNewCardResult, ThreeNewCardsResult } from "./results";
import Page from "../../components/page";
import cardStackImage from "../../images/credit-card-choice/card-stack.svg";
import rewardsCardImage from "../../images/credit-card-choice/rewards-card.svg";
import noCardImage from "../../images/credit-card-choice/no-card.svg";
import "./style.css";

export default class PlasticMail extends Component {
  state = {
    decision: null
  };

  chooseThreeCards = () => {
    this.props.gameData.incrementCreditPower(-10);
    this.setState({ decision: "three cards" });
  };

  chooseOneCard = () => {
    this.props.gameData.incrementCreditPower(-5);
    this.setState({ decision: "one card" });
  };

  chooseNoCard = () => {
    this.props.gameData.incrementCreditPower(10);
    this.setState({ decision: "no card" });
  };

  render() {
    const { nextRoute } = this.props;
    const { decision } = this.state;

    let contents;
    if (decision !== null) {
      if (decision === "one card") contents = <OneNewCardResult nextRoute={nextRoute} />;
      else if (decision === "no card") contents = <NoNewCardResult nextRoute={nextRoute} />;
      else contents = <ThreeNewCardsResult nextRoute={nextRoute} />;
    } else {
      contents = (
        <Prompt title="Plastic Mail">
          <PromptSection>
            <p>
              Now that you’ve been using your first card, you notice that you’ve been getting a lot
              of mail with credit card offers. What do you do?
            </p>
          </PromptSection>
          <PromptSection className="text-center card-choice">
            <div className="card-choice__option">
              <img className="card-choice__image" src={cardStackImage} alt="Multiple Cards" />
              <p className="card-choice__explanation">
                Keep your current card and sign up for three new ones.
              </p>
              <PromptButton onClick={this.chooseThreeCards}>Take New Cards</PromptButton>
            </div>
            <div className="card-choice__option">
              <img className="card-choice__image" src={rewardsCardImage} alt="Rewards Card" />
              <p className="card-choice__explanation">
                Cancel your current card and sign up for one new card with rewards.
              </p>
              <PromptButton onClick={this.chooseOneCard}>Take Rewards</PromptButton>
            </div>
            <div className="card-choice__option">
              <img className="card-choice__image" src={noCardImage} alt="No Card" />
              <p className="card-choice__explanation">Throw out the mail and ignore the offers.</p>
              <PromptButton onClick={this.chooseNoCard}>Ignore Offers</PromptButton>
            </div>
          </PromptSection>
        </Prompt>
      );
    }

    return <Page transitionKey={decision}>{contents}</Page>;
  }
}
