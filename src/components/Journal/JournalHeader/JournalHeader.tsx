"use client";

import { FC } from "react";

export const JournalHeader: FC = () => (
  <div className="mb-8">
    <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-5 text-black dark:text-white">
      Development Journal
    </h1>
    <p>
      I{`'`}ve learned the importance of solving small problems every day to
      improve as a developer. I also know that documenting and indexing these
      solutions can prevent me from making the same mistake twice. I hope that
      sharing publicly will also help others - happy reading!
    </p>
  </div>
);
