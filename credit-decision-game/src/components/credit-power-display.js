import React, { Component } from "react";

import iconSvg from "../images/icons/credit-power.svg";

export default class CreditPowerDisplay extends Component {
  render() {
    return (
      <div className="score-display">
        <div className="score-display__label">Credit Power</div>
        <div className="score-display__value-container">
          <img className="score-display__icon" src={iconSvg} />
          <div className="score-display__value">0</div>
          <div className="score-display__toast" />
        </div>
      </div>
    );
  }
}
