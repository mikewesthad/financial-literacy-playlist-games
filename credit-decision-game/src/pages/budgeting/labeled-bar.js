import React from "react";

export default function LabeledBar({ value, format, minValue = 0, maxValue = 100 } = {}) {
  const percent = (value - minValue) / (maxValue - minValue) * 100;
  return (
    <div className="bar">
      <div className="bar__inner" style={{ width: `${percent}%` }} />
      <div className="bar__label-container" style={{ left: `${percent}%` }}>
        <div className="bar__arrow" />
        <div className="bar__label">{format(percent)}</div>
      </div>
    </div>
  );
}
