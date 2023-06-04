import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { serverSideCmsClient } from "src/server/services/cms/cms.client";
import { NotionRenderer } from "src/components/Common/NotionRenderer";
import { CatchAllPageParams, PageProps } from "src/types/nextjs";
import { isArticle, isTwoStringArray } from "src/types/guards";

export default async function ArticlePage({
  params: { slug: pathParams },
}: PageProps<CatchAllPageParams>) {
  if (!isTwoStringArray(pathParams)) throw notFound();

  const [date, slug] = pathParams;
  const article = await getArticle(date, slug);

  return (
    <div className="mb-8">
      <NotionRenderer recordMap={article} />
    </div>
  );
}

const getArticle = cache(async (date: string, slug: string) => {
  try {
    return await serverSideCmsClient.getPageContent(process.env.BLOG_DB_ID, {
      and: [
        { property: "published", date: { equals: date } },
        {
          property: "slug",
          rich_text: { equals: slug },
        },
      ],
    });
  } catch {
    throw notFound();
  }
});

export async function generateStaticParams() {
  const articles = await serverSideCmsClient.getDatabaseEntries(
    process.env.BLOG_DB_ID,
    isArticle
  );

  return articles.map(({ published, slug }) => ({ slug: [published, slug] }));
}

export async function generateMetadata({
  params: { slug: pathParams },
}: PageProps<CatchAllPageParams>): Promise<Metadata> {
  const [date, articleSlug] = pathParams;
  const [article] = (
    await serverSideCmsClient.getDatabaseEntries(
      process.env.BLOG_DB_ID,
      isArticle
    )
  ).filter(({ published, slug }) => date === published && articleSlug === slug);

  return {
    title: article?.title,
    description: article?.summary,
    authors: { name: "James Haworth Wheatman" },
    keywords: article?.seoKeywords?.map(({ name }) => name) ?? [],
  };
}
