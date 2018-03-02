import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CyclingList, CyclingItem } from "../components/cycling-list";
import CyclingPuzzle from "../components/cycling-puzzle";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";
import ScrollHinter from "../components/scroll-hinter";

import marioGif from "../images/mario-coins-optimized.gif";

export default class BankingSmart extends Component {
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
        <div className="content">
          <div className="section">
            <h1 className="text-center">Banking Smart</h1>
            <img src={marioGif} alt="Mario GIF" className="centered-image" />
          </div>

          <div className="section puzzle">
            <CyclingPuzzle onSolve={this.onSolved}>
              <p>I will follow these tips to make sure I am making the most of my bank account:</p>
              <ul className="list">
                <li>
                  Check my account to make sure I
                  <CyclingList>
                    <CyclingItem>always have</CyclingItem>
                    <CyclingItem isAnswer>do not have</CyclingItem>
                  </CyclingList>
                  overdraft protection.
                </li>
                <li>Check my balance & set up balance alerts.</li>
                <li>
                  Only use
                  <CyclingList>
                    <CyclingItem>out-of-network</CyclingItem>
                    <CyclingItem isAnswer>in network</CyclingItem>
                  </CyclingList>
                  ATMs.
                </li>
                <li>
                  Keep my employer up to date with
                  <CyclingList>
                    <CyclingItem>my best snaps.</CyclingItem>
                    <CyclingItem isAnswer>any banking changes.</CyclingItem>
                  </CyclingList>
                </li>
                <li>
                  Mark any paper checks that I have deposited through a mobile app as
                  <CyclingList>
                    <CyclingItem>"do not touch"</CyclingItem>
                    <CyclingItem>"void"</CyclingItem>
                    <CyclingItem isAnswer>"deposited"</CyclingItem>
                  </CyclingList>
                  as those cannot be cashed or deposited again.
                </li>
                <li>
                  Check my account for any
                  <CyclingList>
                    <CyclingItem>bees</CyclingItem>
                    <CyclingItem>fleas</CyclingItem>
                    <CyclingItem isAnswer>fees</CyclingItem>
                  </CyclingList>
                  and ask my banker if I have questions about them.
                </li>
                <li>
                  Plan ahead before I age out of any student or youth accounts (often around ages 21
                  - 25). I can move my funds to a different type of account or a different bank to
                  avoid fees.
                </li>
              </ul>
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
