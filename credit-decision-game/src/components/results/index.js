import React from "react";
import { Link } from "react-router-dom";
import SizeTracker from "../size-tracker/";

import "./style.css";

// Transition is applied to this component, so it must have a wrapper element that can be styled
export default function Results({ title, message, nextRoute, ...otherProps }) {
  return (
    <div className="results__wrapper">
      <SizeTracker
        render={({ width, height }) => {
          const minViewUnits = window.innerWidth > window.innerHeight ? "vh" : "vw";
          const isSmall = width <= 500 || height <= 500;
          const classes = `results ${isSmall ? "results--sm-screen" : ""}`;
          let style = {};
          if (!isSmall) style = { width: `80${minViewUnits}`, height: `80${minViewUnits}` };
          return (
            <div className={classes} style={style}>
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
        }}
      />
    </div>
  );
}
