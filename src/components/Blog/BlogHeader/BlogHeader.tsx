"use client";

import { FC } from "react";

export const BlogHeader: FC = () => {
  return (
    <div className="mb-8">
      <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-5 text-black dark:text-white">
        Articles
      </h1>
      <p>
        I started writing articles in 2020 as a way to reflect intentionally on
        my ideas - I use writing as a way to think and learn. By publishing
        online, I might help others learn too; I really hope there
        {`'`}s something interesting here for you!
      </p>
    </div>
  );
};
