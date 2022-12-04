import { notFound } from "next/navigation";
import { serverSideCmsClient } from "api/services/notion/notion.client";
import { NotionRenderer } from "components/General/NotionRenderer";

import { PageProps } from "types/nextjs";

const getArticle = async (slug: string) => {
  try {
    return await serverSideCmsClient.getArticleContent(slug);
  } catch {
    throw notFound();
  }
};

export default async function ArticlePage(props: PageProps) {
  const article = await getArticle(props?.params?.slug ?? "");

  return <NotionRenderer recordMap={article} />;
}
