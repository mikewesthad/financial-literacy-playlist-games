import React, { Component } from "react";
import { Prompt, PromptSection, PromptButton } from "../../components/decision";
import { GoodResult, BadResult } from "./results";
import Page from "../../components/page";

export default class SavingFirst extends Component {
  state = {
    choice: null
  };

  chooseSaveOption = () => {
    this.props.incrementSavings(300);
    this.setState({ choice: "save" });
  };
  chooseSpendOption = () => this.setState({ choice: "spend" });

  render() {
    const { nextRoute } = this.props;

    let contents;
    if (this.state.choice === "save") {
      contents = <GoodResult nextRoute={nextRoute} />;
    } else if (this.state.choice === "spend") {
      contents = <BadResult nextRoute={nextRoute} />;
    } else {
      contents = (
        <Prompt title="To Save or Not to Save?">
          <PromptSection>
            <p>
              You are planning on getting your first credit card next month. Do you spend this month
              building up some emergency savings?
            </p>
          </PromptSection>
          <PromptSection className="text-center">
            <PromptButton onClick={this.chooseSaveOption}>Yes - save for a month.</PromptButton>
            <PromptButton onClick={this.chooseSpendOption}>
              Nope! Buy a new bike instead.
            </PromptButton>
          </PromptSection>
        </Prompt>
      );
    }

    return <Page>{contents}</Page>;
  }
}
