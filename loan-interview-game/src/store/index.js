import { observable, decorate, action } from "mobx";

class GameData {
  playerName = "";
  borrowersInterviewed = [];
  selectedBorrower = null;

  setPlayerName = playerName => {
    this.playerName = playerName;
  };
  addBorrowerInterviewed = borrowerName => {
    if (!this.borrowersInterviewed.includes(borrowerName)) {
      this.borrowersInterviewed.push(borrowerName);
    }
  };
  setSelectedBorrower = borrowerName => {
    this.selectedBorrower = borrowerName;
  };
}

decorate(GameData, {
  playerName: observable,
  borrowersInterviewed: observable,
  setPlayerName: action,
  setBorrowerInterviewed: action,
  setSelectedBorrower: action
});

const data = new GameData();

export default data;
