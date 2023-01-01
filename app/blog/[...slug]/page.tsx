import { notFound } from "next/navigation";
import { serverSideCmsClient } from "api/services/cms/cms.client";
import { NotionRenderer } from "components/General/NotionRenderer";

import { CatchAllPageParams, PageProps } from "types/nextjs";
import { isTwoStringArray } from "types/guards";

export default async function ArticlePage(
  props: PageProps<CatchAllPageParams>
) {
  const pathParams = props?.params?.slug;
  if (!isTwoStringArray(pathParams)) throw notFound();

  const [date, slug] = pathParams;
  const article = await getArticle(date, slug);

  return (
    <div className="mb-8">
      <NotionRenderer recordMap={article} />
    </div>
  );
}

const getArticle = async (date: string, slug: string) => {
  try {
    return await serverSideCmsClient.getArticleContent(date, slug);
  } catch {
    throw notFound();
  }
};

export async function generateStaticParams() {
  const articles = await serverSideCmsClient.getArticles();

  return articles.map(({ published, slug }) => ({ slug: [published, slug] }));
}
