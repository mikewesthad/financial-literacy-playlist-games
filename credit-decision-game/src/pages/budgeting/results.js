import React from "react";
import Results from "../../components/results/";

export function NoChangeResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Nothing Charged"
      message="Nothing at all? Your credit power stays the same. Try putting more on your card each month."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function DecentResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="A Good Start"
      message="That’s a good start towards building your credit, but you can put more on your card."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function GreatResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Nice Job!"
      message="That’s the sweet spot! You are using less than 30% of your available credit. (Remember, paying your balance in full each month saves money and helps keep your overall balance and credit utilization low.)"
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function BadResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Slow Down!"
      message="Whoa, you are spending more than 30% of your credit limit. Keep your balance to 30% or less of your limit in order to build your credit power."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}
