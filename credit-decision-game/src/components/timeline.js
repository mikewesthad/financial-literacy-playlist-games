import React, { Component } from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const Dot = (
  x,
  y,
  {
    addLeftConnector = true,
    addRightConnector = true,
    isActive = false,
    isComplete = false,
    name = ""
  } = {}
) => (
  <React.Fragment key={name}>
    {addLeftConnector && (
      <rect x={isActive ? x - 55 : x - 45} y={y - 3} width="20" height="6" fill="#37BF86" />
    )}
    <circle cx={x} cy={y} r={isActive ? "25" : "13  "} fill={isComplete ? "#fff" : "none"} />
    <circle cx={x} cy={y} r={isActive ? "25" : "13"} stroke="#37BF86" strokeWidth="7" fill="none" />
    {addRightConnector && (
      <rect x={isActive ? x + 35 : x + 25} y={y - 3} width="20" height="6" fill="#37BF86" />
    )}
    {isActive && (
      <React.Fragment>
        <polygon points={`${x - 10},${y + 50} ${x + 10},${y + 50} ${x},${y + 40}`} fill="#37BF86" />
        <text
          x={x}
          y={y + 75}
          fontFamily="Glacial Indifference"
          fill="#fff"
          stroke="none"
          fontSize="28"
          textAnchor="middle"
        >
          {name}
        </text>
      </React.Fragment>
    )}
  </React.Fragment>
);

export default class Timeline extends Component {
  render() {
    let { decisionNumber } = this.props;
    decisionNumber = parseInt(decisionNumber, 10);

    const dots = [];
    for (let i = 0; i < 12; i++) {
      dots.push(
        new Dot(70 + 90 * i, 40, {
          addLeftConnector: i !== 0,
          addRightConnector: i !== 11,
          isActive: i === decisionNumber,
          isComplete: i <= decisionNumber,
          name: monthNames[i]
        })
      );
    }
    return (
      <svg className="timeline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1130 130">
        {dots}
      </svg>
    );
  }
}
