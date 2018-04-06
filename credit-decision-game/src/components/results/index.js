import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Results({ title, message, nextRoute, ...otherProps }) {
  return (
    <div className="results">
      <div className="results__content">
        <div className="results__section">
          <div className="results__title">{title}</div>
        </div>
        <div className="results__section">
          <p className="results__message">{message}</p>
        </div>
        <div className="results__section">
          <Link to={nextRoute} className="results__button">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
