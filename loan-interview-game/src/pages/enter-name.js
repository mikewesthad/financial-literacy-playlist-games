import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const EnterName = observer(({ gameData }) => (
  <div className="fullscreen-container">
    <div className="content">
      <h1>Before we start the game, what’s you name?</h1>
      <h2>(Don’t worry - it doesn’t have to be your real name)</h2>
      <input
        type="text"
        value={gameData.playerName}
        onChange={e => gameData.setPlayerName(e.target.value)}
      />
      <Link to="/start" className="button-link">
        Play →
      </Link>
    </div>
  </div>
));

export default EnterName;
