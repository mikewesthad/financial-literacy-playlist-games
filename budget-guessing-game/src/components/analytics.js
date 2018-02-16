import React, { Component } from "react";
import ReactGA from "react-ga";

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize(this.props.trackingId);
  }

  componentDidMount() {
    ReactGA.pageview(this.props.location.pathname);
    ReactGA.event({ category: "Game", action: "Game Started" });
  }

  componentDidUpdate(prevProps) {
    const prevPathname = prevProps.location.pathname;
    const pathname = this.props.location.pathname;

    if (prevPathname !== pathname) {
      ReactGA.pageview(pathname);
      if (pathname === "/") {
        ReactGA.event({ category: "Game", action: "Game Restarted" });
      } else if (pathname === "/outro") {
        ReactGA.event({ category: "Game", action: "Game Completed" });
      }
    }
  }

  render() {
    return null;
  }
}
