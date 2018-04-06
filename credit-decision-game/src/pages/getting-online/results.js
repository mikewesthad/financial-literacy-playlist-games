import React from "react";
import Results from "../../components/results/";

export function EnableAlertsResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Nice Save"
      message="A few days later, you got an alert about a charge you didn’t make. You called the credit card company and got it fixed right away."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function SkipAlertsResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="More Fraud"
      message="At the end of the month you notice more charges on your card that you didn’t make. If you had alerts enabled, you would have known right away."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}
