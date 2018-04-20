import React from "react";
import { SequenceElement } from "../../components/fade-in-sequence";

const taylorOutro = (
  <div>
    <div>
      <SequenceElement delay={0}>
        <span>
          Taylor's lack of a payment history would have been a big factor in determining their
          credit score.{" "}
        </span>
      </SequenceElement>
      <SequenceElement>
        <span>
          Knowing that Taylor had a low score would have helped you know not to lend to them.
        </span>
      </SequenceElement>
    </div>
    <SequenceElement>
      <p>
        Other factors like Taylor's lack of a stable job are generally considered by lenders along
        with credit score when applying for a loan.
      </p>
    </SequenceElement>
  </div>
);

const hannahOutro = (
  <div>
    <div>
      <SequenceElement delay={0}>
        <span>
          Some factors you considered such as payment history and Hannah’s maxed out cards would
          have been important in determining Hannah's credit score.{" "}
        </span>
      </SequenceElement>
      <SequenceElement>
        <span>
          Knowing that Hannah had a low score would have helped you know not to lend to them.
        </span>
      </SequenceElement>
    </div>
    <SequenceElement>
      <p>
        Others factors like Hannah's lack of a stable job are generally considered by lenders along
        with credit score when applying for a loan.
      </p>
    </SequenceElement>
  </div>
);

const anthonyOutro = (
  <div>
    <div>
      <SequenceElement delay={0}>
        <span>
          Some of the things you considered in lending to Anthony, such as his payment history, are
          also considered in determining your credit score.{" "}
        </span>
      </SequenceElement>
      <SequenceElement>
        <span>
          Knowing that Anthony had a high credit score would have made it even easier for you to
          decide to lend to Anthony.
        </span>
      </SequenceElement>
    </div>
    <SequenceElement>
      <p>
        Others factors like Anthony's job stability are generally considered by lenders along with
        credit score when applying for a loan.
      </p>
    </SequenceElement>
  </div>
);

export { taylorOutro, hannahOutro, anthonyOutro };
