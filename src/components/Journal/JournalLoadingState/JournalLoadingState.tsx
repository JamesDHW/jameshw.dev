"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { ContentPageLoadingState } from "src/components/Common/ContentPageLoadingState";
import { PATHS } from "src/app/constants";
import { JournalHeader } from "../JournalHeader";
import { JournalEntryRowSkeleton } from "../JournalEntryRowSkeleton";
import { JournalEntryList } from "../JournalEntryList";

export const JournalLoadingState: FC = () => {
  const path = usePathname();

  if (path === PATHS.JOURNAL)
    return (
      <div className="flex flex-col px-8">
        <JournalHeader />
        <JournalEntryList data={[]} />
        <div className="my-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <JournalEntryRowSkeleton key={i} />
          ))}
        </div>
      </div>
    );

  return <ContentPageLoadingState />;
};
