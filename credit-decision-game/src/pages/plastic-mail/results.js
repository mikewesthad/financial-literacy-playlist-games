import React from "react";
import Results from "../../components/results/";

export function ThreeNewCardsResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Too Many Cards"
      message="Each new card you apply for opens a credit inquiry. Too many credit inquiries can hurt your credit power. You’ll also have to manage putting purchases on and paying off a total of four cards."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function OneNewCardResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Keep Your Card..."
      message="The rewards and perks are nice on this new card but you want to keep your first card as long as possible. It will be your longest item in your credit history."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function NoNewCardResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Nice!"
      message="Keeping your first credit card as long as possible will help your credit power."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}
