import React, { Component } from "react";
import { Link } from "react-router-dom";
import { taylorOutcome, hannahOutcome, anthonyOutcome } from "./outcomes";

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
        <div className="content">
          <div>You recommended {formattedName} to your boss.</div>

          {outcome}

          <p>Close this tab and return to LRNG to complete this XP.</p>

          <div className="text-center">
            <Link className="button-link" to="/">
              Play Again
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
