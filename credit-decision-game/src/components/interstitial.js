import React, { Component } from "react";

export default class Interstitial extends Component {
  render() {
    return (
      <div className="interstitial">
        <div className="interstitial__content">{this.props.children}</div>
      </div>
    );
  }
}
