import React from "react";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";

import celebrate from "../images/celebrate.gif";

export default function Outro() {
  return (
    <div className="fullscreen-container">
      <div className="content results">
        <FadeInSequence defaultDuration={1} defaultDelay={0.5}>
          <div className="section">
            <SequenceElement delay={0}>
              <img className="centered-image" src={celebrate} alt="" />
            </SequenceElement>
            <SequenceElement delay={0}>
              <p>Nice estimating!</p>
            </SequenceElement>
          </div>
          <div className="section">
            <SequenceElement>
              <p>
                Now you can see why budgeting matters. Even small expenses can add up! Be sure to
                budget, track your spending and have emergency savings to back you up.
              </p>
            </SequenceElement>
            <SequenceElement>
              <p className="outro">
                Let's try it. Close this tab and return to LRNG to complete your budget.
              </p>
            </SequenceElement>
          </div>
        </FadeInSequence>
      </div>
    </div>
  );
}
