import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const ENTER_KEYCODE = 13;

const EnterName = observer(
  class EnterName extends Component {
    onKeyDown = e => {
      if (e.keyCode === ENTER_KEYCODE) this.goToNext();
    };

    goToNext = () => {
      const { history, nextRoute } = this.props;
      history.push(nextRoute);
    };

    onSubmit = e => {
      e.preventDefault();
      this.goToNext();
    };

    render() {
      const { gameData, nextRoute } = this.props;

      return (
        <div className="fullscreen-container">
          <div className="content">
            <div className="section text-center">
              <h1>Before we start the game, pick a name for your character.</h1>
            </div>
            <div className="section text-center">
              <form onSubmit={this.onSubmit}>
                <input
                  className="text-input"
                  placeholder="Name..."
                  type="text"
                  value={gameData.playerName}
                  onChange={e => gameData.setPlayerName(e.target.value)}
                  onKeyDown={this.onKeyDown}
                />
              </form>
            </div>
            <div className="section text-center">
              <Link to={nextRoute} className="button-link">
                Play →
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
);

export default EnterName;
