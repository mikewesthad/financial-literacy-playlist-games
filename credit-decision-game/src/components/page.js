import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ScrollToTop from "./scroll-to-top";

export default function Page({ children, transitionKey }) {
  return (
    <React.Fragment>
      <ScrollToTop scrollKey={transitionKey} />
      <TransitionGroup component={null}>
        <CSSTransition key={transitionKey} classNames="fade-zoom-" timeout={1200}>
          <div className="page">{children}</div>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
}
