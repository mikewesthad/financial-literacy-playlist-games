import React from "react";
import Results from "../../components/results/";

export function NoChangeResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Nothing Charged"
      message="Nothing at all? Your credit level stays the same."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function DecentResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="A Good Start"
      message="That’s a good start, but you can put more on your card."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function GreatResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Nice Job!"
      message="That’s the sweet spot! You want to aim to use about 30% of your available credit each month."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function BadResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Slow Down!"
      message="Whoa, you are close to maxing out your credit card. This won’t help your credit."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}
