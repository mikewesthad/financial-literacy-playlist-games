import React, { Component } from "react";
import { Prompt, PromptSection, PromptButton } from "../../components/decision";
import Results from "../../components/results/";
import Page from "../../components/page";

export default class CreditCheck extends Component {
  render() {
    return (
      <Page transitionKey={1}>
        <p>Credit Check</p>
      </Page>
    );
  }
}
