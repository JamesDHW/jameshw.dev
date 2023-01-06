"use client";

import { FC } from "react";
import { SearchList } from "components/Common/SearchList";
import { ResourcesLinkCard } from "components/Resources/ResourcesLinkCard";
import { LearningResource } from "types/cms";

interface ResourceList {
  data: LearningResource[];
}

export const ResourceList: FC<ResourceList> = ({ data }) => {
  const fetchData = (query: string) =>
    data.filter(
      ({ title, type, tags }) =>
        title.toLowerCase().includes(query) ||
        type.name.toLowerCase().includes(query) ||
        tags.some(({ name }) => name.toLowerCase().includes(query))
    );

  return (
    <SearchList<LearningResource>
      ListItem={ResourcesLinkCard}
      fetchData={fetchData}
      placeholder="Search Recommendations"
    />
  );
};
