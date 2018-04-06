import React from "react";
import { SequenceElement } from "../../components/fade-in-sequence";

const taylorOutcome = (
  <div>
    <SequenceElement>
      <p>While Taylor is your boss’s cousin, they turned out to be unreliable.</p>
    </SequenceElement>
    <SequenceElement delay={2}>
      <p>
        Without a clear plan to pay back the loan and without any history of paying bills on time,
        they just blew through the money and have nothing to show for it. They never paid back the
        loan.
      </p>
    </SequenceElement>
    <SequenceElement delay={2}>
      <p>
        Next time, try looking for someone with a clear plan to repay the loan and who has a history
        of making payments on time.
      </p>
    </SequenceElement>
  </div>
);

const hannahOutcome = (
  <div>
    <SequenceElement>
      <p>While Hannah is a good friend of your boss, they turned out to be unreliable.</p>
    </SequenceElement>
    <SequenceElement delay={2}>
      <p>
        They have a history of making payments on time and a plan to repay the loan, but they also
        have maxed out credit cards and a history of losing their job. They used the loan to buy a
        car, but ended up quitting their new job. Since they were already struggling with credit
        card debit, they still haven’t paid back the loan.
      </p>
    </SequenceElement>
    <SequenceElement delay={2}>
      <p>
        Next time, try looking for someone who doesn’t have a lot of existing debt and who has a
        stable job.
      </p>
    </SequenceElement>
  </div>
);

const anthonyOutcome = (
  <div>
    <SequenceElement>
      <p>
        Anthony was a perfect choice! They had a repayment plan, a stable job and a history of
        paying off loans. They were able to take the night classes, get the new job in marketing at
        the library and pay your boss back all within a year.
      </p>
    </SequenceElement>
  </div>
);

export { taylorOutcome, hannahOutcome, anthonyOutcome };
