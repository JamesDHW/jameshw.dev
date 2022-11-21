import { NextApiRequest, NextApiResponse } from "next";
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { serverSideNotionClient2 } from "server/services/notion/notion.client";
import { notionDatabasePropertyResolver } from "server/services/notion/notion.utils";
import { Article } from "types/blog";

const isFullResponse = (
  results: (PageObjectResponse | PartialPageObjectResponse)[]
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
): results is PageObjectResponse[] => results[0].properties !== undefined;

export const getArticles = async () => {
  const { results } = await serverSideNotionClient2.databases.query({
    database_id: process.env.BLOG_DB_ID ?? "",
  });

  if (isFullResponse(results)) {
    const articles: Article[] = results.map(({ id, properties }) => {
      const formattedProps = Object.entries(properties).reduce(
        (acc, [key, prop]) => {
          const value = notionDatabasePropertyResolver(prop);

          return { ...acc, [key]: value };
        },
        {} as Omit<Article, "id">
      );

      return { id, ...formattedProps };
    });

    return articles;
  }

  throw new Error("oops");
};
