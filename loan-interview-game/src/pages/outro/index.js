import React, { Component } from "react";
import { taylorOutro, hannahOutro, anthonyOutro } from "./outros";
import { FadeInSequence, SequenceElement } from "../../components/fade-in-sequence";

export default class DecisionOutcome extends Component {
  render() {
    const { gameData } = this.props;
    const { selectedBorrower } = gameData;

    let outcome;
    if (selectedBorrower === "hannah") outcome = hannahOutro;
    else if (selectedBorrower === "taylor") outcome = taylorOutro;
    else if (selectedBorrower === "anthony") outcome = anthonyOutro;
    else throw new Error(`Unknown borrower selected by player: "${selectedBorrower}"`);

    return (
      <div className="fullscreen-container">
        <FadeInSequence defaultDuration={1} defaultDelay={1.5}>
          <div className="content">
            {outcome}

            <SequenceElement>
              <p className="outro">Close this tab and return to LRNG to complete this XP.</p>
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
