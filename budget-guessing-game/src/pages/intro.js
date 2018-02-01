import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Intro({ nextRoute }) {
  return (
    <div className="fullscreen-container">
      <div className="content results">
        <div className="section">
          <p>
            Although budgeting may sound like a pain … it can actually give YOU control over your
            money!
          </p>
          <p>
            Most simply, a budget compares your income (money in) with your expenses (money out). If
            your income is not MORE than your expenses, you WILL go into debt.
          </p>
          <p>AND even small expenses can add up and should be included in your budget.</p>
        </div>
        <div className="section submit" delay={1}>
          <Link to={nextRoute} className="button-link">
            Begin →
          </Link>
        </div>
      </div>
    </div>
  );
}
