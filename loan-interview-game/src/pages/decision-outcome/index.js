import React, { Component } from "react";
import { Link } from "react-router-dom";
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

    const formattedName = selectedBorrower.charAt(0).toUpperCase() + selectedBorrower.slice(1);

    return (
      <div className="fullscreen-container">
        <FadeInSequence defaultDuration={1} defaultDelay={0.5}>
          <div className="content">
            <SequenceElement delay={0}>
              <div>You recommended {formattedName} to your boss.</div>
            </SequenceElement>

            {outcome}

            <SequenceElement>
              <p>Close this tab and return to LRNG to complete this XP.</p>
            </SequenceElement>

            <SequenceElement>
              <div className="text-center">
                <Link className="button-link" to="/">
                  Play Again
                </Link>
              </div>
            </SequenceElement>
          </div>
        </FadeInSequence>
      </div>
    );
  }
}
