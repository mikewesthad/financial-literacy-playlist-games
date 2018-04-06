import React from "react";
import Results from "../../components/results/";

export function GoodResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Nice Sleuthing!"
      message="You found the fraudulent charges. It’s always a good idea to review your transactions regularly and call your credit card company immediately if there are any transactions you didn’t make."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function MissedFraudResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Whoops..."
      message="You missed a fraudulent charge, and it hurt your credit power."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function DisputedIncorrectlyResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Whoops..."
      message="You disputed a charge that you actually made last month, and it hurt your credit power."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}
