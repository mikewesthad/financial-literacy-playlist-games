import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CyclingList, CyclingItem } from "../components/cycling-list";
import CyclingPuzzle from "../components/cycling-puzzle";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";
import ScrollHinter from "../components/scroll-hinter";

import depositGif from "../images/cat-deposit-optimized.gif";

export default class DirectDeposit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSolved: false
    };
  }

  onSolved = () => {
    this.setState({ isSolved: true });
  };

  render() {
    const { nextRoute } = this.props;
    const { isSolved } = this.state;

    return (
      <div className="fullscreen-container">
        <div className="content text-center">
          <div className="section">
            <h1>Direct Deposit</h1>
            <img className="centered-image" src={depositGif} alt="Deposit GIF" />
          </div>

          <div className="section">
            <p style={{ fontStyle: "italic" }}>
              Click the <strong className="purple-text">purple</strong> text below to cycle through
              possibilities. When you find the right option, the text will turn{" "}
              <strong>white</strong>, a message will appear and you can advance.
            </p>
          </div>

          <div className="section puzzle">
            <CyclingPuzzle onSolve={this.onSolved}>
              <p>I will bring in proof of</p>
              <CyclingList>
                <CyclingItem>shoe size</CyclingItem>
                <CyclingItem>SnapChat followers</CyclingItem>
                <CyclingItem isAnswer>banking & state ID</CyclingItem>
              </CyclingList>
              <p>again to re-enroll in direct deposit.</p>
            </CyclingPuzzle>
          </div>

          <div className="section">
            <FadeInSequence startFade={isSolved} defaultDuration={1} defaultDelay={0.5}>
              <SequenceElement delay={1}>
                <div>
                  <h1 className={isSolved ? "tada-animation animation-delay-1s" : ""}>Nice job!</h1>
                  <div className="section submit text-center">
                    <Link to={nextRoute} className="button-link">
                      Next →
                    </Link>
                  </div>
                </div>
              </SequenceElement>
            </FadeInSequence>
          </div>

          {isSolved && <ScrollHinter />}
        </div>
      </div>
    );
  }
}
