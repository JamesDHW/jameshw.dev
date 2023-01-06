"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { ContentPageLoadingState } from "components/Common/ContentPageLoadingState";
import { PATHS } from "app/constants";
import { JournalHeader } from "../JournalHeader";
import { JournalEntryRowSkeleton } from "../JournalEntryRowSkeleton";

export const JournalLoadingState: FC = () => {
  const path = usePathname();

  if (path === PATHS.JOURNAL)
    return (
      <div className="flex flex-col px-8">
        <JournalHeader />
        <div className="my-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <JournalEntryRowSkeleton key={i} />
          ))}
        </div>
      </div>
    );

  return <ContentPageLoadingState />;
};
