import React, { Component } from "react";
import { Link } from "react-router-dom";
import { formatAsIntCurrency } from "../utils/currency-conversion";
import AnimateCurrency from "../animations/animate-currency";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";

const actualCost = 4015;

export default class LunchResults extends Component {
  render() {
    const { guess, nextRoute } = this.props;

    const difference = Math.abs(actualCost - guess);
    let comparisonStatement = "";
    if (difference === 0) {
      comparisonStatement = <div>Bullseye! That's exactly what you thought.</div>;
    } else if (difference < 100) {
      if (actualCost > guess) {
        comparisonStatement = (
          <div>
            Nice job! That's only <span className="green">{formatAsIntCurrency(difference)}</span>{" "}
            more than you thought.
          </div>
        );
      } else if (actualCost < guess) {
        comparisonStatement = (
          <div>
            Nice job! That's only <span className="green">{formatAsIntCurrency(difference)}</span>{" "}
            less than you thought.
          </div>
        );
      }
    } else {
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
      }
    }

    return (
      <div className="fullscreen-container">
        <div className="content results text-center">
          <FadeInSequence defaultDuration={1} defaultDelay={1}>
            <SequenceElement delay={0}>
              <div className="section">
                <div className="results__body-text">You guessed:</div>
                <AnimateCurrency
                  className="results__currency-text"
                  endValue={guess}
                  duration={1}
                  delay={0.25}
                />
              </div>
            </SequenceElement>

            <SequenceElement>
              <div className="section">
                <div className="results__body-text">
                  According to a national study by Visa, the average cost of eating lunch out was
                  $11. If you bought 365 meals, that would cost:
                </div>
                <AnimateCurrency
                  className="results__currency-text"
                  endValue={actualCost}
                  duration={1}
                  delay={2}
                />
              </div>
            </SequenceElement>

            <SequenceElement>
              <div className="section">
                <div className="results__body-text">{comparisonStatement}</div>
              </div>
            </SequenceElement>

            <SequenceElement>
              <div className="section submit">
                <Link to={nextRoute} className="button-link">
                  NEXT →
                </Link>
              </div>
            </SequenceElement>
          </FadeInSequence>
        </div>
      </div>
    );
  }
}
