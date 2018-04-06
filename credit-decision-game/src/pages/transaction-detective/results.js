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
export function BadResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Whoops..."
      message="This won’t hurt your credit level, but it’s always a good idea to have an emergency fund."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}
