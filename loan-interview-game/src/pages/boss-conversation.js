import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FadeInSequence, SequenceElement } from "../components/fade-in-sequence";

export default class BossConversation extends Component {
  render() {
    const { gameData, nextRoute } = this.props;
    const playerName = gameData.playerName !== "" ? gameData.playerName : "Player";

    return (
      <div className="fullscreen-container">
        <FadeInSequence defaultDuration={1} defaultDelay={1}>
          <div className="content">
            <div className="section">
              <SequenceElement delay={0}>
                <p>{playerName}, I’ve got a new assignment for you.</p>
              </SequenceElement>

              <p>
                <SequenceElement>
                  <span>It seems like everyone knows how well we’ve been doing... </span>
                </SequenceElement>
                <SequenceElement>
                  <span>everyone has been asking me for money.</span>
                </SequenceElement>
              </p>

              <SequenceElement delay={1.5}>
                <p>
                  I’ve been burned in the past. I have a blind spot when it comes to helping people
                  I know. I need someone who isn’t biased.
                </p>
              </SequenceElement>

              <SequenceElement delay={1.5}>
                <p>
                  That’s where you come in, {playerName}. I have three people who have asked for a
                  personal loan. I need you to interview them and figure how who of the three is
                  most reliable and will pay me back.
                </p>
              </SequenceElement>
            </div>

            <SequenceElement>
              <div className="section text-center">
                <Link to={nextRoute} className="button-link">
                  Start Interviewing
                </Link>
              </div>
            </SequenceElement>
          </div>
        </FadeInSequence>
      </div>
    );
  }
}
