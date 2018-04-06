import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Page({ children, transitionKey }) {
  return (
    <div className="page">
      <TransitionGroup component={null}>
        <CSSTransition key={transitionKey} classNames="fade-zoom-" timeout={1200}>
          {children}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
