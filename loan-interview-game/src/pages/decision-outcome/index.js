import React, { Component } from "react";
import { taylorOutcome, hannahOutcome, anthonyOutcome } from "./outcomes";
import { FadeInSequence, SequenceElement } from "../../components/fade-in-sequence";

export default class DecisionOutcome extends Component {
  render() {
    const { gameData } = this.props;
    const { selectedBorrower } = gameData;

    let outcome;
    if (selectedBorrower === "hannah") outcome = hannahOutcome;
    else if (selectedBorrower === "taylor") outcome = taylorOutcome;
    else if (selectedBorrower === "anthony") outcome = anthonyOutcome;
    else throw new Error(`Unknown borrower selected by player: "${selectedBorrower}"`);

    return (
      <div className="fullscreen-container">
        <FadeInSequence defaultDuration={1} defaultDelay={2}>
          <div className="content">
            {outcome}

            <SequenceElement>
              <p>Close this tab and return to LRNG to complete this XP.</p>
            </SequenceElement>

            <SequenceElement>
              <div className="text-center">
                <button className="button-link" onClick={() => window.location.reload()}>
                  Play Again
                </button>
              </div>
            </SequenceElement>
          </div>
        </FadeInSequence>
      </div>
    );
  }
}
