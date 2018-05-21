import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CyclingList, CyclingItem } from "../components/cycling-list";
import CyclingPuzzle from "../components/cycling-puzzle";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";
import ScrollHinter from "../components/scroll-hinter";

import splittingGif from "../images/splitting-money-optimized.gif";

export default class SplittingPay extends Component {
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
            <h1>Splitting Pay</h1>
            <img className="centered-image" src={splittingGif} alt="Splitting GIF" />
          </div>

          <div className="section">
            <p style={{ fontStyle: "italic" }}>
              Slighty harder now - solve both together. When all are correct, the text will turn
              white, a message will appear and you can advance.
            </p>
          </div>

          <div className="section puzzle">
            <CyclingPuzzle onSolve={this.onSolved}>
              <p>I will consider splitting my pay into</p>
              <CyclingList>
                <CyclingItem>shoeboxes</CyclingItem>
                <CyclingItem isAnswer>both checking & saving accounts</CyclingItem>
                <CyclingItem>tiny little pieces</CyclingItem>
              </CyclingList>
              <p>or</p>
              <CyclingList>
                <CyclingItem>a couple duffle bags</CyclingItem>
                <CyclingItem>my pockets</CyclingItem>
                <CyclingItem isAnswer>a payroll card & saving product</CyclingItem>
              </CyclingList>
              <p>Youth who split their pay save more.</p>
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
