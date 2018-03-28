import React from "react";
import { Link } from "react-router-dom";
import AvatarPortrait from "../components/avatar-portrait";
import Hannah from "../images/avatars/hannah.svg";
import Anthony from "../images/avatars/anthony.svg";
import Taylor from "../images/avatars/taylor.svg";

const Notes = ({ Svg, name, cluesFound, totalClues }) => {
  const numCluesFound = cluesFound.length;
  let cluesDisplay;
  if (numCluesFound === 0) {
    cluesDisplay = <p>No clues uncovered yet. Interview {name} to learn more!</p>;
  } else if (numCluesFound !== totalClues) {
    cluesDisplay = (
      <ul>
        {cluesFound.map(clue => <li>{clue}</li>)}
        <li>{totalClues - numCluesFound} clues left to uncover!</li>
      </ul>
    );
  } else {
    cluesDisplay = <ul>{cluesFound.map(clue => <li>{clue}</li>)}</ul>;
  }

  return (
    <div className="col-3">
      <AvatarPortrait Svg={Svg} name={name} />
      {cluesDisplay}
    </div>
  );
};

export default function ReviewNotes({ hannahTree, anthonyTree, taylorTree }) {
  return (
    <div className="fullscreen-container">
      <div className="content">
        <h1>Your Notes</h1>
        <div className="row">
          <Notes
            Svg={Hannah}
            name="Hannah"
            cluesFound={hannahTree.cluesFound}
            totalClues={hannahTree.totalNumClues}
          />
          <Notes
            Svg={Anthony}
            name="Anthony"
            cluesFound={anthonyTree.cluesFound}
            totalClues={anthonyTree.totalNumClues}
          />
          <Notes
            Svg={Taylor}
            name="Taylor"
            cluesFound={taylorTree.cluesFound}
            totalClues={taylorTree.totalNumClues}
          />
        </div>
      </div>
    </div>
  );
}
