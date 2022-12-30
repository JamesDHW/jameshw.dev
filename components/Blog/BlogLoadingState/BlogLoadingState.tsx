"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { ArticleLoadingState } from "components/Blog/ArticleLoadingState";
import { Skeleton } from "components/General/Skeleton";

export const BlogLoadingState: FC = () => {
  const path = usePathname();

  if (path === "/blog")
    return (
      <div className="flex flex-col px-8">
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-5 text-black dark:text-white">
          Articles
        </h1>
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={`article-skel-${i}`} />
        ))}
      </div>
    );

  return <ArticleLoadingState />;
};
