import React from "react";
import { SequenceElement } from "../../components/fade-in-sequence";

const taylorOutcome = (
  <div>
    <div>
      <SequenceElement delay={0}>
        <span>You recommended Taylor. </span>
      </SequenceElement>
      <SequenceElement delay={0}>
        <span>While Taylor is your boss’s cousin, Taylor turned out to be unreliable.</span>
      </SequenceElement>
    </div>
    <SequenceElement delay={1}>
      <p>
        Without a clear plan to pay back the loan and without any history of paying bills on time,
        they just blew through the money and have nothing to show for it.
      </p>
    </SequenceElement>
    <SequenceElement delay={2}>
      <p>They never paid back the loan.</p>
    </SequenceElement>
    <SequenceElement delay={2}>
      <p>
        Next time, try looking for someone with a clear plan to repay the loan, a stable job and a
        history of making payments on time.
      </p>
    </SequenceElement>
  </div>
);

const hannahOutcome = (
  <div>
    <div>
      <SequenceElement delay={0}>
        <span>You recommended Hannah. </span>
      </SequenceElement>
      <SequenceElement delay={0}>
        <span>While Hannah is a good friend of your boss, Hannah turned out to be unreliable.</span>
      </SequenceElement>
    </div>
    <SequenceElement delay={1}>
      <p>
        They have made payments on time in the past and have a plan to repay the loan, but they also
        have maxed out credit cards and a history of losing their job.
      </p>
    </SequenceElement>
    <SequenceElement delay={2}>
      <p>
        They used the loan to buy a car, but then quit their job. Since they already had existing
        debt, they still haven’t paid back the loan.
      </p>
    </SequenceElement>
    <SequenceElement delay={2}>
      <p>Next time, try looking for someone who has no debt and a stable job.</p>
    </SequenceElement>
  </div>
);

const anthonyOutcome = (
  <div>
    <div>
      <SequenceElement delay={0}>
        <span>You recommended Anthony. </span>
      </SequenceElement>
      <SequenceElement delay={0}>
        <span>Anthony was a perfect choice!</span>
      </SequenceElement>
    </div>
    <SequenceElement delay={1}>
      <p>
        They had a repayment plan, a stable job and a history of paying off loans. They were able to
        take the night classes, get the new job in marketing at the library and pay your boss back
        all within a year.
      </p>
    </SequenceElement>
  </div>
);

export { taylorOutcome, hannahOutcome, anthonyOutcome };
