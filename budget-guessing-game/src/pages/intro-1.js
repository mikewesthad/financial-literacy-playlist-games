import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TweenLite, TimelineMax } from "gsap";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";

import balance from "../images/balance.gif";

export default class Intro1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { nextRoute } = this.props;

    return (
      <div className="fullscreen-container">
        <div className="content">
          <FadeInSequence defaultDuration={1} defaultDelay={0.5}>
            <div className="section">
              <p>
                <SequenceElement delay={0}>
                  <span>Although budgeting may sound like a pain... </span>
                </SequenceElement>
                <SequenceElement>
                  <span>it can actually give you control over your money!</span>
                </SequenceElement>
              </p>
              <SequenceElement>
                <p>Simply put, the key is:</p>
              </SequenceElement>
              <SequenceElement>
                <div className="text-center">
                  <img src={balance} alt="balance" />
                </div>
              </SequenceElement>
            </div>
            <SequenceElement>
              <div className="section submit text-center">
                <Link to={nextRoute} className="button-link">
                  Next →
                </Link>
              </div>
            </SequenceElement>
          </FadeInSequence>
        </div>
      </div>
    );
  }
}
