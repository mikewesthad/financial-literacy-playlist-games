import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hannah from "../images/avatars/hannah.svg";
import Anthony from "../images/avatars/anthony.svg";
import Taylor from "../images/avatars/taylor.svg";

export default class DecisionMenu extends Component {
  constructor(props) {
    super(props);

    this.selectHannah = () => this.selectBorrower("hannah");
    this.selectAnthony = () => this.selectBorrower("anthony");
    this.selectTaylor = () => this.selectBorrower("taylor");
  }

  selectBorrower = name => {
    const { history, gameData } = this.props;
    gameData.setSelectedBorrower(name);
    history.push("/decision-outcome");
  };

  render() {
    return (
      <div className="fullscreen-container">
        <div className="content">
          <h1>Who will you recommend to your boss?</h1>
          <div className="horizontal-avatar">
            <Hannah
              className="horizontal-avatar__portrait button-image"
              onClick={this.selectHannah}
            />
            <button
              className="horizontal-avatar__button button-link button-link--hannah"
              onClick={this.selectHannah}
            >
              Choose Hannah →
            </button>
          </div>
          <div className="horizontal-avatar text-center">
            <Anthony
              className="horizontal-avatar__portrait button-image"
              onClick={this.selectAnthony}
            />
            <button
              className="horizontal-avatar__button button-link button-link--anthony"
              onClick={this.selectAnthony}
            >
              Choose Anthony →
            </button>
          </div>
          <div className="horizontal-avatar text-center">
            <Taylor
              className="horizontal-avatar__portrait button-image"
              onClick={this.selectTaylor}
            />
            <button
              className="horizontal-avatar__button button-link button-link--taylor"
              onClick={this.selectTaylor}
            >
              Choose Taylor →
            </button>
          </div>

          <div className="text-center">
            <h1>Need more time?</h1>
            <Link className="button-link" to="/interview-menu">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
