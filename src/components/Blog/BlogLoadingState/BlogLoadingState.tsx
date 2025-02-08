"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { ContentPageLoadingState } from "components/Common/ContentPageLoadingState/ContentPageLoadingState";
import { Skeleton } from "components/Common/Skeleton/Skeleton";
import { PATHS } from "app/constants";
import { BlogList } from "../BlogList/BlogList";

export const BlogLoadingState: FC = () => {
  const path = usePathname();

  if (path === PATHS.BLOG)
    return (
      <div className="flex flex-col">
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
