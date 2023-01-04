"use client";

import { FC } from "react";
import { ResourcesHeader } from "../ResourcesHeader";
import { ResourcesLinkCard } from "../ResourcesLinkCard";

export const ResourcesLoadingState: FC = () => {
  return (
    <div className="flex flex-col px-8">
      <ResourcesHeader />
      <div className="my-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <ResourcesLinkCard key={`resource-skel-${i}`} />
        ))}
      </div>
    </div>
  );
};
