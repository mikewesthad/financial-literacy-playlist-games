import React from "react";
import checkmarkImage from "../../images/icons/checkmark.svg";
import "./checkbox.css";

export default function Checkbox({ checked, className, disabled, ...otherProps }) {
  return (
    <div
      className={`checkbox ${checked ? "checkbox--checked" : ""} ${
        disabled ? "checkbox--disabled" : "checkbox--interactive"
      } ${className}`}
      {...otherProps}
    >
      <img
        draggable={false}
        width={checked ? "100%" : "0px"}
        height={checked ? "100%" : "0px"}
        className="checkbox__checkmark"
        src={checkmarkImage}
        alt="Checkmark"
      />
    </div>
  );
}
