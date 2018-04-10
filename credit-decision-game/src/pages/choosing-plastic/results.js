import React from "react";
import Results from "../../components/results/";

export function GoodResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Smart choice!"
      message="While this card may not seem fancy, it’s the smart choice. It does not have any fees and it has a low interest rate. Now you can start building credit."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}
export function BadResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Beware!"
      message="Careful — that fee will add up. You’ll want to keep this card for a long time in order to build your credit history. If you have it for 15 years, that’s $1500 dollars! Now you can start building credit."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}
