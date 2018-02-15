import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Force the user to start at the home page.
export default class ForceVisitIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { hasVisitedIndex: this.props.location.pathname === "/" };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.hasVisitedIndex && nextProps.location.pathname === "/") {
      this.setState({ hasVisitedIndex: true });
    }
  }

  render() {
    return this.state.hasVisitedIndex ? null : <Redirect to="/" />;
  }
}
