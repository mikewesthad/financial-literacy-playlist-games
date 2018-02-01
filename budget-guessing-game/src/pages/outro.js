import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Intro({ nextRoute }) {
  return (
    <div className="fullscreen-container">
      <div className="content results">
        <div className="section">
          <p>Now that you can see why budgeting matters, let’s try it!</p>
          <p>
            Download our budgeting spreadsheet for young adults who are working only OR if you are
            going to college visit CollegeBudgetBuilder.org.
          </p>
        </div>
      </div>
    </div>
  );
}
