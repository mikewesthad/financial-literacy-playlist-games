import React from "react";

import "./style.css";

export const PromptSection = ({ children, className, ...otherProps }) => (
  <div className={`prompt__section ${className || ""}`} {...otherProps}>
    {children}
  </div>
);

export const PromptButton = ({ children, className, ...otherProps }) => (
  <button className={`prompt__button ${className || ""}`} {...otherProps}>
    {children}
  </button>
);

export const PromptImage = ({ children, alt, className, ...otherProps }) => (
  <img className={`prompt__image ${className || ""}`} alt={alt} {...otherProps}>
    {children}
  </img>
);

export function Prompt({ title, children, ...otherProps }) {
  return (
    <div className="prompt">
      <PromptSection>
        <div className="prompt__title">{title}</div>
      </PromptSection>
      {children}
    </div>
  );
}
