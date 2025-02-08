"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { ContentPageLoadingState } from "components/Common/ContentPageLoadingState/ContentPageLoadingState";
import { PATHS } from "app/constants";
import { JournalEntryRowSkeleton } from "../JournalEntryRowSkeleton/JournalEntryRowSkeleton";
import { JournalEntryList } from "../JournalEntryList/JournalEntryList";

export const JournalLoadingState: FC = () => {
  const path = usePathname();

  if (path === PATHS.JOURNAL)
    return (
      <div className="flex flex-col">
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
