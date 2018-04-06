import React, { Component } from "react";
import { Prompt, PromptSection, PromptButton } from "../../components/decision";
import Page from "../../components/page";
import "./style.css";

export default class PlasticMail extends Component {
  state = {
    decision: null
  };

  render() {
    const { nextRoute } = this.props;
    const { decision } = this.state;

    let contents = (
      <div className="browser">
        <div className="browser-bar">
          <div className="browser-button" />
          <div className="browser-button" />
          <div className="browser-button" />
        </div>
        <div className="browser-content">
          <div className="website">
            <div className="website__banner">Bank of First Credit</div>
            <div className="website__content">
              <p>hi</p>
            </div>
          </div>
        </div>
      </div>
    );

    return <Page transitionKey={decision}>{contents}</Page>;
  }
}
