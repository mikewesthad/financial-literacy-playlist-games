import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hannah from "../images/avatars/hannah.svg";
import Anthony from "../images/avatars/anthony.svg";
import Taylor from "../images/avatars/taylor.svg";

const Notes = ({ Svg, name, cluesFound, totalClues }) => {
  const numCluesFound = cluesFound.length;

  let message = "";
  if (numCluesFound === totalClues) {
    message = "Nice job - all clues uncovered!";
  } else if (numCluesFound === 0) {
    message = `No clues uncovered yet. Go interview ${name}!`;
  } else {
    const numRemaining = totalClues - numCluesFound;
    message = `${numRemaining} ${numRemaining === 1 ? "clue" : "clues"} left to uncover!`;
  }

  return (
    <div className="notebook">
      <Svg className="notebook__portrait" />
      <div className="text-center">
        <div className="notebook__name text-center">{name}</div>
      </div>
      <ul className="notebook__clues-list">
        {cluesFound.map((clue, i) => (
          <li key={`clue${i}`} className="notebook__clues-item">
            {clue}
          </li>
        ))}
      </ul>
      <div className="notebook__clues-message text-center">{message}</div>
    </div>
  );
};

const numNotes = 3;
const lastIndex = numNotes - 1;

export default class ReviewNotes extends Component {
  state = {
    noteIndex: 0
  };

  goToNextNote = () => {
    this.setState(prev => ({
      noteIndex: prev.noteIndex < lastIndex ? prev.noteIndex + 1 : 0
    }));
  };

  goToPreviousNote = () => {
    this.setState(prev => ({
      noteIndex: prev.noteIndex > 0 ? prev.noteIndex - 1 : lastIndex
    }));
  };

  render() {
    const { hannahTree, anthonyTree, taylorTree } = this.props;
    const { noteIndex } = this.state;

    let highlightedNote;
    if (noteIndex === 0) {
      highlightedNote = (
        <Notes
          Svg={Hannah}
          name="Hannah"
          cluesFound={hannahTree.cluesFound}
          totalClues={hannahTree.totalNumClues}
        />
      );
    } else if (noteIndex === 1) {
      highlightedNote = (
        <Notes
          Svg={Anthony}
          name="Anthony"
          cluesFound={anthonyTree.cluesFound}
          totalClues={anthonyTree.totalNumClues}
        />
      );
    } else {
      highlightedNote = (
        <Notes
          Svg={Taylor}
          name="Taylor"
          cluesFound={taylorTree.cluesFound}
          totalClues={taylorTree.totalNumClues}
        />
      );
    }

    return (
      <div className="fullscreen-container">
        <div className="content">
          <div className="section">
            <h1>Your Notes</h1>
          </div>

          <div className="section">{highlightedNote}</div>

          <div className="section text-center">
            <button className="button-link" onClick={this.goToPreviousNote}>
              {"<"}
            </button>
            <Link to="/interview-menu" className="button-link" style={{ margin: "0 1rem" }}>
              Back
            </Link>
            <button className="button-link" onClick={this.goToNextNote}>
              {">"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
