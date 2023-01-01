"use client";

import { FC } from "react";

export const BlogHeader: FC = () => {
  return (
    <div className="mb-8">
      <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-5 text-black dark:text-white">
        Articles
      </h1>
      <p>
        I{`'`}ve been writing articles infrequently since 2020 to consolidate my
        learnings on various topics. Packaging ideas into blog posts helps me to
        actively reflect on them; it might also help others to learn too - I
        hope there{`'`}s something interesting here for you!
      </p>
    </div>
  );
};
