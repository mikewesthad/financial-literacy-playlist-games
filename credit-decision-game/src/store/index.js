import { observable, action } from "mobx";

class GameData {
  @observable creditPower = 0;
  @observable savings = 0;
  @observable transactions = [];
  @observable decisionNumber = 0;

  @action
  reset = () => {
    this.creditPower = 0;
    this.savings = 0;
    this.transactions = [];
    this.decisionNumber = 0;
  };

  @action
  incrementCreditPower = delta => {
    this.creditPower += delta;
  };
  @action
  setCreditPower = creditPower => {
    this.creditPower = creditPower;
  };

  @action
  incrementSavings = delta => {
    this.savings += delta;
  };
  @action
  setSavings = savings => {
    this.savings = savings;
  };

  @action
  setTransactions = transactions => {
    this.transactions = transactions;
  };

  @action
  incrementDecisionNumber = (increment = 1) => {
    this.decisionNumber += increment;
  };
  @action
  setDecisionNumber = decisionNumber => {
    this.decisionNumber += decisionNumber;
  };
}

const data = new GameData();

export default data;
