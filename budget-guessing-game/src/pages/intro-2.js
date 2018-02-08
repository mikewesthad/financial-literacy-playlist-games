import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";

export default class Intro2 extends Component {
  render() {
    const { nextRoute } = this.props;

    return (
      <div className="fullscreen-container">
        <div className="content">
          <FadeInSequence defaultDuration={1} defaultDelay={0.5}>
            <div className="section">
              <SequenceElement delay={0}>
                <p>A budget is about balancing income (money in) with expenses (money out).</p>
              </SequenceElement>
              <SequenceElement>
                <p>
                  Even small expenses can add up and should be included in your budget, so it's
                  important to be able to estimate your expenses.
                </p>
              </SequenceElement>
              <SequenceElement>
                <p>Ready to test your estimating skills?</p>
              </SequenceElement>
            </div>
            <SequenceElement>
              <div className="section submit text-center">
                <Link to={nextRoute} className="button-link">
                  Begin →
                </Link>
              </div>
            </SequenceElement>
          </FadeInSequence>
        </div>
      </div>
    );
  }
}
