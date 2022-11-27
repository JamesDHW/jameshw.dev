import { NotionRenderer } from "components/General/NotionRenderer";

import { PageProps } from "types/nextjs";
import { getArticle } from "server/handlers/articles/[slug]/get";

export default async function ArticlePage(props: PageProps) {
  const recordMap = await getArticle(props?.params?.slug ?? "");

  return <NotionRenderer recordMap={recordMap} />;
}
