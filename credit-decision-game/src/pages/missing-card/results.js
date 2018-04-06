import React from "react";
import Results from "../../components/results/";

export function CancelResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Exactly!"
      message="When you can’t find your card, you should immediately call up your credit company and cancel it. It may just be lost, but someone might have taken it and started using it."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function WaitResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Uh Oh"
      message="Turns out you dropped your card when you were getting coffee this morning. Someone found it and started charging up a storm."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}
