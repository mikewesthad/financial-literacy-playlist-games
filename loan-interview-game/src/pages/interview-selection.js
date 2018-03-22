import React from "react";
import { Link } from "react-router-dom";

import Hannah from "../images/avatars/hannah.svg";
import Anthony from "../images/avatars/anthony.svg";
import Taylor from "../images/avatars/taylor.svg";

const AvatarPortrait = ({ Svg, name, ...props } = {}) => (
  <figure className="avatar-portrait" {...props}>
    <Svg className="avatar-portrait__image" />
    <figcaption className="avatar-portrait__caption">{name}</figcaption>
  </figure>
);

export default function InterviewSelection() {
  return (
    <div className="fullscreen-container">
      <div className="content">
        <h1>Who do you want to interview?</h1>
        <div className="row">
          <Link className="col-3" to="/interview-hannah">
            <AvatarPortrait Svg={Hannah} name="Hannah" />
          </Link>
          <Link className="col-3" to="/interview-anthony">
            <AvatarPortrait Svg={Anthony} name="Anthony" />
          </Link>
          <Link className="col-3" to="/interview-taylor">
            <AvatarPortrait Svg={Taylor} name="Taylor" />
          </Link>
        </div>
      </div>
    </div>
  );
}
