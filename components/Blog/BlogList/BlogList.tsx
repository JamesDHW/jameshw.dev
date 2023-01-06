"use client";

import { FC } from "react";
import { SearchList } from "components/Common/SearchList";
import { BlogLinkCard } from "components/Blog/BlogLinkCard";
import { Article } from "types/cms";

interface BlogList {
  data: Article[];
}

export const BlogList: FC<BlogList> = ({ data }) => {
  const fetchData = (query: string) =>
    data.filter(
      ({ title, summary, tags }) =>
        title.toLowerCase().includes(query) ||
        summary.toLowerCase().includes(query) ||
        tags.some(({ name }) => name.toLowerCase().includes(query))
    );

  return (
    <SearchList<Article>
      ListItem={BlogLinkCard}
      fetchData={fetchData}
      placeholder="Search Articles"
    />
  );
};
