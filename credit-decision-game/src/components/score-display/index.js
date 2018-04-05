import React, { Component } from "react";
import AnimatedNumber from "./animated-number";
import creditPowerIcon from "../../images/icons/credit-power.svg";
import "./style.css";

export class CreditPowerDisplay extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="score-display">
        <div className="score-display__label">Credit Power</div>
        <div className="score-display__value-container">
          <img className="score-display__icon" src={creditPowerIcon} alt="Credit Power" />
          <AnimatedNumber value={value} />
        </div>
      </div>
    );
  }
}

export class SavingsDisplay extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="score-display text-right">
        <div className="score-display__label">Savings</div>
        <div className="score-display__value-container score-display__value-container--right">
          $<AnimatedNumber className="score-display__toast--right" value={value} />
        </div>
      </div>
    );
  }
}
