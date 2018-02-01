import React, { Component } from "react";
import { Link } from "react-router-dom";
import { formatAsIntCurrency } from "../utils";
import FadeInSequence from "../animations/fade-in-sequence";
import AnimateCurrency from "../animations/animate-currency";

const actualCost = 1186;

export default class CoffeeGuess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { guess, nextRoute } = this.props;

    const difference = Math.abs(actualCost - guess);
    let comparisonStatement = "";
    if (actualCost > guess) {
      comparisonStatement = (
        <div>
          That's <span className="green">{formatAsIntCurrency(difference)}</span> more than you
          thought!
        </div>
      );
    } else if (actualCost < guess) {
      comparisonStatement = (
        <div>
          That's <span className="green">{formatAsIntCurrency(difference)}</span> less than you
          thought!
        </div>
      );
    } else {
      comparisonStatement = <div>That's exactly what you thought. Nice job!</div>;
    }

    return (
      <div className="fullscreen-container">
        <div className="content results">
          <FadeInSequence defaultDuration={0.75}>
            <div className="section">
              <div className="results__body-text">You guessed:</div>
              <AnimateCurrency
                className="results__currency-text"
                endValue={guess}
                duration={1}
                delay={0.25}
              />
            </div>

            <div className="section" delay={1}>
              <div className="results__body-text">
                According to a national study by Visa, the average cup of coffee costs $3.25. If you
                bought one a day for a whole year:
              </div>
              <AnimateCurrency
                className="results__currency-text"
                endValue={actualCost}
                duration={1}
                delay={2}
              />
            </div>

            <div className="section" delay={1}>
              <div className="results__body-text">{comparisonStatement}</div>
            </div>

            <div className="section submit" delay={1}>
              <Link to={nextRoute} className="button-link">
                NEXT →
              </Link>
            </div>
          </FadeInSequence>
        </div>
      </div>
    );
  }
}
