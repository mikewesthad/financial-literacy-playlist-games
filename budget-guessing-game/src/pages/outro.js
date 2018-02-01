import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FadeInSequence, SequenceElement } from "../animations/fade-in-sequence";

import celebrate from "../images/celebrate.gif";

export default function Outro() {
  return (
    <div className="fullscreen-container">
      <div className="content results">
        <FadeInSequence defaultDuration={1} defaultDelay={0.5}>
          <div className="section">
            <SequenceElement delay={0}>
              <img className="centered-image" src={celebrate} alt="" />
            </SequenceElement>
            <SequenceElement delay={0}>
              <p>Nice estimating!</p>
            </SequenceElement>
          </div>
          <div className="section">
            <SequenceElement delay={0}>
              <p>Now that you can see why budgeting matters, let’s head back to LRNG and try it.</p>
            </SequenceElement>
          </div>
        </FadeInSequence>
      </div>
    </div>
  );
}
