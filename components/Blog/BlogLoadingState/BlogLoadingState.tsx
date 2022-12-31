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
        <p>
          I{`'`}ve been writing articles infrequently since 2020 to consolidate
          my learnings on various topics. Packaging ideas into blog posts helps
          me to actively reflect on them; it might also help others to learn too
          - I hope there{`'`}s something interesting here for you!
        </p>
        <div className="my-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={`article-skel-${i}`} />
          ))}
        </div>
      </div>
    );

  return <ArticleLoadingState />;
};
