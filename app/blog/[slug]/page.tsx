import { serverSideCmsClient } from "api/services/notion/notion.client";
import { NotionRenderer } from "components/General/NotionRenderer";

import { PageProps } from "types/nextjs";

export default async function ArticlePage(props: PageProps) {
  const recordMap = await serverSideCmsClient.getArticleContent(
    props?.params?.slug ?? ""
  );

  return <NotionRenderer recordMap={recordMap} />;
}
