import React from "react";
import Results from "../../components/results/";

export function GoodResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Smart thinking!"
      message="The $300 dollars you saved up this month will go a long way if you get into trouble later."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}
export function BadResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Beware"
      message="This won't hurt your credit level, but an emergency fund can help you pay your credit card bill in an emergency and avoid interest charges."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}
