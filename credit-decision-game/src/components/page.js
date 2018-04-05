import React from "react";
import { TransitionGroup } from "react-transition-group";

export default function Page({ children }) {
  return (
    <div className="page">
      <TransitionGroup>{children}</TransitionGroup>
    </div>
  );
}
