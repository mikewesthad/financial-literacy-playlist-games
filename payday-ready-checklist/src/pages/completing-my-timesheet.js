import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CyclingList, CyclingItem } from "../components/cycling-list";
import CyclingPuzzle from "../components/cycling-puzzle";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";
import ScrollHinter from "../components/scroll-hinter";

import timeGif from "../images/time-optimized.gif";

export default class CompletingMyTimesheet extends Component {
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
            <h1>Completing My Timesheet</h1>
            <img src={timeGif} alt="Timesheet GIF" className="centered-image" />
          </div>

          <div className="section puzzle">
            <CyclingPuzzle onSolve={this.onSolved}>
              <p>I will complete it on time and accurately to</p>
              <CyclingList>
                <CyclingItem>the decade.</CyclingItem>
                <CyclingItem>the day.</CyclingItem>
                <CyclingItem>the hour.</CyclingItem>
                <CyclingItem isAnswer>the 1/4 hour.</CyclingItem>
                <CyclingItem>the millisecond.</CyclingItem>
              </CyclingList>
              <p>I will be sure my timesheet is signed by</p>
              <CyclingList>
                <CyclingItem>Beyoncé.</CyclingItem>
                <CyclingItem>my mom.</CyclingItem>
                <CyclingItem isAnswer>my supervisor.</CyclingItem>
                <CyclingItem>my co-worker.</CyclingItem>
              </CyclingList>
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
