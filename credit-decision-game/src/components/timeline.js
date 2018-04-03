import React, { Component } from "react";

import timelineSvg from "../images/timeline/timeline.svg";

export default class Timeline extends Component {
  render() {
    return <img className="timeline" src={timelineSvg} />;
  }
}
