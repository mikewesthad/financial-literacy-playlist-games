import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const EnterName = observer(({ gameData, nextRoute }) => (
  <div className="fullscreen-container">
    <div className="content">
      <div className="section text-center">
        <h1>Before we start the game, pick a name for your character.</h1>
      </div>
      <div className="section text-center">
        <input
          className="text-input"
          placeholder="Name..."
          type="text"
          value={gameData.playerName}
          onChange={e => gameData.setPlayerName(e.target.value)}
        />
      </div>
      <div className="section text-center">
        <Link to={nextRoute} className="button-link">
          Play →
        </Link>
      </div>
    </div>
  </div>
));

export default EnterName;
