import React, { Component } from "react";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";

import perfectShotGif from "../images/master-shot-optimized.gif";

export default class Outro extends Component {
  render() {
    return (
      <div className="fullscreen-container">
        <div className="content">
          <FadeInSequence defaultDuration={1} defaultDelay={0.5}>
            <div className="section">
              <SequenceElement delay={0}>
                <div>
                  <h1 className="purple-text">Masterful</h1>
                  <img className="centered-image" src={perfectShotGif} alt="Perfect shot gif" />
                </div>
              </SequenceElement>
              <p>
                <SequenceElement delay={0}>
                  <span>Now you are ready to make the most of your money!</span>
                </SequenceElement>
              </p>
              <SequenceElement>
                <p className="outro">Close this tab and return to LRNG to complete this XP.</p>
              </SequenceElement>
            </div>
          </FadeInSequence>
        </div>
      </div>
    );
  }
}
