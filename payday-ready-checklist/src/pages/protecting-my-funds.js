import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CyclingList, CyclingItem } from "../components/cycling-list";
import CyclingPuzzle from "../components/cycling-puzzle";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";
import ScrollHinter from "../components/scroll-hinter";

import protectGif from "../images/privacy-optimized.gif";

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
                    <CyclingItem>
                      posting my PIN to my <br className="responsive-break" /> Insta followers
                    </CyclingItem>
                    <CyclingItem>
                      using my birthday <br className="responsive-break" /> as my PIN
                    </CyclingItem>
                    <CyclingItem isAnswer>
                      not keeping my pin <br className="responsive-break" /> with my card
                    </CyclingItem>
                  </CyclingList>
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  <CyclingList>
                    <CyclingItem>
                      taking checks from <br className="responsive-break" />strangers
                    </CyclingItem>
                    <CyclingItem isAnswer>
                      not taking checks from <br className="responsive-break" />people I don't trust
                    </CyclingItem>
                    <CyclingItem>
                      signing checks without <br className="responsive-break" />depositing them
                    </CyclingItem>
                  </CyclingList>
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  <CyclingList>
                    <CyclingItem>
                      letting my friend log <br className="responsive-break" />into my account
                    </CyclingItem>
                    <CyclingItem>
                      writting my password down <br className="responsive-break" />in my notebook
                    </CyclingItem>
                    <CyclingItem isAnswer>
                      not sharing <br className="responsive-break" />my account information
                    </CyclingItem>
                    <CyclingItem>
                      using my pet's name as <br className="responsive-break" />my account password
                    </CyclingItem>
                  </CyclingList>
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
