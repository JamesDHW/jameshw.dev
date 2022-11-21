import { Suspense } from "react";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "components/NotionRenderer";

import { PageProps } from "types/nextjs";
import { BASE_URL } from "utils/env";
import { getArticle } from "server/handlers/articles/[slug]/get";
import ArticlePageLoading from "./loading";

const getData = async (slug?: string): Promise<ExtendedRecordMap> => {
  const res = await fetch(`${BASE_URL}/api/articles/${slug ?? ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as ExtendedRecordMap;
};

export default async function ArticlePage(props: PageProps) {
  const recordMap = await getArticle(props?.params?.slug ?? "");

  return (
    <Suspense fallback={<ArticlePageLoading />}>
      <NotionRenderer recordMap={recordMap} />
    </Suspense>
  );
}
