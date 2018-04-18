import React from "react";
import SizeTracker from "../size-tracker/";
import monthNames from "./month-names";
import MonthIndicator from "./month-indicator";
import Connector from "./connector";
import Dot from "./dot";
import "./style.css";

const monthToXY = i => ({ x: 70 + 90 * i, y: 40 });

export default function Timeline({ decisionNumber }) {
  if (decisionNumber === undefined) decisionNumber = -1;

  const elements = [];
  for (let i = 0; i < 12; i++) {
    const { x, y } = monthToXY(i);
    const isActive = i === decisionNumber;
    const isComplete = i < decisionNumber;

    elements.push(<Dot key={`dot-${i}`} x={x} y={y} isComplete={isComplete} isActive={isActive} />);

    if (i !== 11) {
      elements.push(
        <Connector
          key={`connector-${i}`}
          x={x + 25}
          y={y - 3}
          height="6"
          width="40"
          isLeftActive={decisionNumber === i}
          isRightActive={decisionNumber === i + 1}
        />
      );
    }
  }

  return (
    <SizeTracker
      render={({ width }) => {
        const monthName = decisionNumber >= 0 ? monthNames[decisionNumber] : "";
        if (width <= 480) {
          return <div className="timeline-text">{monthName}</div>;
        } else {
          const monthXY = decisionNumber >= 0 ? monthToXY(decisionNumber) : { x: 0, y: 0 };
          return (
            <svg className="timeline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1130 130">
              {elements}
              {monthName && <MonthIndicator x={monthXY.x} y={monthXY.y} name={monthName} />}
            </svg>
          );
        }
      }}
    />
  );
}
