import React from "react";
import Results from "../../components/results/";

export function PaidInFullResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Smart Move!"
      message="You built up enough savings to have an emergency fund. You pay your bill on time and in full."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function PartiallyPaidResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Good Thinking"
      message="You make a payment, but you didn’t pay it all. The part you didn’t pay will collect interest. You’ll want to pay it off as fast as possible."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}

export function SkipPaymentResult({ nextRoute, ...otherProps }) {
  return (
    <Results
      title="Ouch..."
      message="Your credit dropped a lot when you skipped paying. Paying on time is essential to building good credit. You are also going to get hit with a late payment fee and interest charges. You’ll want to pay it off as fast as possible."
      nextRoute={nextRoute}
      {...otherProps}
    />
  );
}
