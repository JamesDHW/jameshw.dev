"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { ContentPageLoadingState } from "src/components/Common/ContentPageLoadingState";
import { Skeleton } from "src/components/Common/Skeleton";
import { PATHS } from "src/app/constants";
import { BlogHeader } from "../BlogHeader";
import { BlogList } from "../BlogList";

export const BlogLoadingState: FC = () => {
  const path = usePathname();

  if (path === PATHS.BLOG)
    return (
      <div className="flex flex-col px-8">
        <BlogHeader />
        <BlogList data={[]} />
        <div className="my-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={`article-skel-${i}`} />
          ))}
        </div>
      </div>
    );

  return <ContentPageLoadingState />;
};
