import { observable, decorate, action } from "mobx";

class GameData {
  playerName = "";
  borrowersInterviewed = [];

  setPlayerName = playerName => {
    console.log(playerName);
    this.playerName = playerName;
  };
  addBorrowerInterviewed = borrowerName => {
    if (!this.borrowersInterviewed.includes(borrowerName)) {
      this.borrowersInterviewed.push(borrowerName);
    }
  };
}

decorate(GameData, {
  playerName: observable,
  borrowersInterviewed: observable,
  setPlayerName: action,
  setBorrowerInterviewed: action
});

const data = new GameData();

export default data;
