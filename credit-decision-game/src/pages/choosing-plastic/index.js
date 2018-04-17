import React, { Component } from "react";
import Tooltip from "./tooltip";
import tips from "./tips";
import { GoodResult, BadResult } from "./results";
import { Prompt, PromptSection } from "../../components/decision";
import Page from "../../components/page";
import vipCardImage from "../../images/credit-cards/vip-card.svg";
import firstBankCardImage from "../../images/credit-cards/first-bank-card.svg";
import "./style.css";

const ChoiceBox = ({ cardSrc, creditLimit, apr, annualFee, rewards, onClick }) => (
  <div className="choice-box">
    <div className="choice-box__row">
      <img className="choice-box__image" src={cardSrc} alt="" />
    </div>
    <div className="choice-box__row">
      <div className="choice-box__label">
        Credit Limit
        <Tooltip>{tips.creditLimit}</Tooltip>
      </div>
      <div className="choice-box__value">{creditLimit}</div>
    </div>
    <div className="choice-box__row">
      <div className="choice-box__label">
        APR
        <Tooltip>{tips.apr}</Tooltip>
      </div>
      <div className="choice-box__value">{apr}</div>
    </div>
    <div className="choice-box__row">
      <div className="choice-box__label">
        Annual Fee
        <Tooltip>{tips.annualFee}</Tooltip>
      </div>
      <div className="choice-box__value">{annualFee}</div>
    </div>
    <div className="choice-box__row">
      <div className="choice-box__label">
        Rewards
        <Tooltip>{tips.rewards}</Tooltip>
      </div>
      <div className="choice-box__value">{rewards}</div>
    </div>
    <div className="choice-box__row">
      <div className="choice-box__button" onClick={onClick}>
        Choose This Card ⇨
      </div>
    </div>
  </div>
);

export default class ChoosingPlastic extends Component {
  state = {
    choice: null
  };

  chooseGoodCard = () => {
    this.props.gameData.incrementCreditPower(10);
    this.setState({ choice: "good" });
  };

  chooseBadCard = () => {
    this.props.gameData.incrementCreditPower(5);
    this.props.gameData.incrementSavings(-100);
    this.setState({ choice: "bad" });
  };

  render() {
    const { nextRoute } = this.props;

    let contents;
    if (this.state.choice === "good") {
      contents = <GoodResult nextRoute={nextRoute} />;
    } else if (this.state.choice === "bad") {
      contents = <BadResult nextRoute={nextRoute} />;
    } else {
      contents = (
        <Prompt title="Choosing Your Plastic">
          <PromptSection>
            <p>
              You do some research and find two credit cards that you are eligible for. Which do you
              choose? (Click on the question marks to learn more.)
            </p>
          </PromptSection>
          <div className="choices">
            <ChoiceBox
              cardSrc={vipCardImage}
              creditLimit="$500"
              apr="40%"
              annualFee="$100"
              rewards="1% Cash Back"
              onClick={this.chooseBadCard}
            />
            <ChoiceBox
              cardSrc={firstBankCardImage}
              creditLimit="$500"
              apr="15%"
              annualFee="$0"
              rewards="None"
              onClick={this.chooseGoodCard}
            />
          </div>
        </Prompt>
      );
    }

    return <Page transitionKey={this.state.choice}>{contents}</Page>;
  }
}
