import React, { Component } from "react";

import iconSvg from "../images/icons/credit-power.svg";

export default class SavingsDisplay extends Component {
  render() {
    return (
      <div className="score-display score-display__right">
        <div className="score-display__label">Savings</div>
        <div className="score-display__value-container">
          <div className="score-display__value">$0</div>
          <div className="score-display__toast score-display__toast--right" />
        </div>
      </div>
    );
  }
}
