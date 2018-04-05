import React from "react";
import { CSSTransition } from "react-transition-group";

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

export function Prompt({ title, children }) {
  return (
    <CSSTransition classNames="fade-" timeout={1000}>
      <div className="prompt">
        <PromptSection>
          <div className="prompt__title">{title}</div>
        </PromptSection>
        {children}
      </div>
    </CSSTransition>
  );
}
