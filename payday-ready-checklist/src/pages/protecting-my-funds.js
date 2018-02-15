import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CyclingList, CyclingItem } from "../components/cycling-list";
import CyclingPuzzle from "../components/cycling-puzzle";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";

import protectGif from "../images/protect-optimized.gif";

export default class ProtectingMyFunds extends Component {
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
            <h1>Protecting My Funds</h1>
            <img className="centered-image" src={protectGif} alt="Protect GIF" />
          </div>

          <div className="section puzzle">
            <CyclingPuzzle onSolve={this.onSolved}>
              <p>I will keep all of my banking information private and secure by</p>
              <ul>
                <li style={{ marginBottom: "0.75rem" }}>
                  <CyclingList>
                    <CyclingItem>posting my PIN to my Insta followers</CyclingItem>
                    <CyclingItem isAnswer>NOT keeping my pin with my card</CyclingItem>
                  </CyclingList>
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  <CyclingList>
                    <CyclingItem>taking checks from strangers</CyclingItem>
                    <CyclingItem isAnswer>NOT taking checks from people I do not trust</CyclingItem>
                  </CyclingList>
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  <CyclingList>
                    <CyclingItem isAnswer>NOT sharing my account information</CyclingItem>
                    <CyclingItem>giving my account info a friend</CyclingItem>
                  </CyclingList>
                </li>
              </ul>
            </CyclingPuzzle>
          </div>

          <FadeInSequence startFade={isSolved} defaultDuration={1} defaultDelay={0.5}>
            <div className="section" style={{ visibility: !isSolved ? "" : "" }}>
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
            </div>
          </FadeInSequence>
        </div>
      </div>
    );
  }
}
