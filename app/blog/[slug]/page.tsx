import { notFound } from "next/navigation";
import { serverSideCmsClient } from "api/services/cms/cms.client";
import { NotionRenderer } from "components/General/NotionRenderer";

import { PageProps } from "types/nextjs";

export default async function ArticlePage(props: PageProps) {
  const article = await getArticle(props?.params?.slug ?? "");

  return <NotionRenderer recordMap={article} />;
}

const getArticle = async (slug: string) => {
  try {
    return await serverSideCmsClient.getArticleContent(slug);
  } catch {
    throw notFound();
  }
};

export async function generateStaticParams() {
  const articles = await serverSideCmsClient.getArticles();

  return articles.map(({ slug }) => ({ slug }));
}
