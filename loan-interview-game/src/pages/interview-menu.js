import React from "react";
import { Link } from "react-router-dom";
import AvatarPortrait from "../components/avatar-portrait";
import Hannah from "../images/avatars/hannah.svg";
import Anthony from "../images/avatars/anthony.svg";
import Taylor from "../images/avatars/taylor.svg";

export default function InterviewMenu({ numBorrowersInterviewed }) {
  const heading = `Who do you want to interview ${numBorrowersInterviewed > 0 ? "now" : "first"}`;

  return (
    <div className="fullscreen-container">
      <div className="content">
        <h1>{heading}</h1>
        <div className="row">
          <div className="col-3 text-center">
            <Link to="/interview-hannah">
              <AvatarPortrait Svg={Hannah} name="Hannah" />
            </Link>
            <Link className="button-link button-link--hannah" to="/interview-hannah">
              Hannah →
            </Link>
          </div>
          <div className="col-3 text-center" to="/interview-anthony">
            <Link to="/interview-anthony">
              <AvatarPortrait Svg={Anthony} name="Anthony" />
            </Link>
            <Link className="button-link button-link--anthony" to="/interview-anthony">
              Anthony →
            </Link>
          </div>
          <div className="col-3 text-center" to="/interview-taylor">
            <Link to="/interview-taylor">
              <AvatarPortrait Svg={Taylor} name="Taylor" />
            </Link>
            <Link className="button-link button-link--taylor" to="/interview-taylor">
              Taylor →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h1>Or, ready to make a decision?</h1>
          <Link className="button-link" to="/review-notes" style={{ marginRight: "2rem" }}>
            Review Notes →
          </Link>
          <Link className="button-link" to="/make-decision">
            Make Decision →
          </Link>
        </div>
      </div>
    </div>
  );
}
