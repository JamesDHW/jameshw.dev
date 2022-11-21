import {
  serverSideNotionClient,
  serverSideNotionClient2,
} from "server/services/notion/notion.client";

export const getArticle = async (slug: string) => {
  const { results } = await serverSideNotionClient2.databases.query({
    database_id: process.env.BLOG_DB_ID ?? "",
    filter: {
      property: "slug",
      rich_text: { equals: slug },
    },
  });

  const id = results[0].id;

  return await serverSideNotionClient.getPage(id);
};
