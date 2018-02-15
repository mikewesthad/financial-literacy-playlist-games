import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";

export default class Intro extends Component {
  render() {
    const { nextRoute } = this.props;

    return (
      <div className="fullscreen-container">
        <div className="content">
          <FadeInSequence defaultDuration={1} defaultDelay={0.5}>
            <div className="section">
              <h1 className="purple-text">Payday Ready Masters</h1>
              <p>
                <SequenceElement delay={0}>
                  <span>Last summer, you proved that you were Payday Ready</span>
                </SequenceElement>
                <SequenceElement>
                  <span>, but it never hurts to brush up on good financial habits.</span>
                </SequenceElement>
              </p>
              <SequenceElement>
                <p>
                  Test your knowledge and recommit to making the most of your money again this
                  summer.
                </p>
              </SequenceElement>
            </div>

            <SequenceElement>
              <div className="section submit text-center">
                <Link to={nextRoute} className="button-link">
                  Start →
                </Link>
              </div>
            </SequenceElement>
          </FadeInSequence>
        </div>
      </div>
    );
  }
}
