import React, { Component } from "react";
import Tooltip from "./tooltip";
import tips from "./tips";
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
  render() {
    return (
      <div>
        <div className="prompt">
          <div className="prompt__section">
            <div className="prompt__title">Choosing Your Plastic</div>
          </div>
          <div className="prompt__section">
            <div className="prompt__message">
              You do some research and find two credit cards that you are eligible for. Which do you
              choose?
            </div>
          </div>
        </div>
        <div class="choices">
          <ChoiceBox
            cardSrc={vipCardImage}
            creditLimit="$500"
            apr="40%"
            annualFee="$100"
            rewards="1% Cash Back"
            onClick={() => console.log("picked vip")}
          />
          <ChoiceBox
            cardSrc={firstBankCardImage}
            creditLimit="$500"
            apr="15%"
            annualFee="$0"
            rewards="None"
            onClick={() => console.log("picked first bank")}
          />
        </div>
      </div>
    );
  }
}
