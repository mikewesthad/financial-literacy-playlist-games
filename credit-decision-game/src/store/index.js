import { observable, action } from "mobx";

class GameData {
  @observable playerName = "";

  @action
  setPlayerName = playerName => {
    this.playerName = playerName;
  };
}

const data = new GameData();

export default data;
