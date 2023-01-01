"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { ContentPageLoadingState } from "components/General/ContentPageLoadingState";
import { PATHS } from "app/constants";
import { JournalHeader } from "../JournalHeader";
import { JournalEntryRow } from "../JournalEntryRow";

export const JournalLoadingState: FC = () => {
  const path = usePathname();

  if (path === PATHS.JOURNAL)
    return (
      <div className="flex flex-col px-8">
        <JournalHeader />
        <div className="my-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <JournalEntryRow key={`journal-skel-${i}`} />
          ))}
        </div>
      </div>
    );

  return <ContentPageLoadingState />;
};
