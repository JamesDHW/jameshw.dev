import { NotionAPI } from "notion-client";
import { Client } from "@notionhq/client";
import { Article } from "types/blog";
import {
  formatNotionPageAttributes,
  isFullNotionResponse,
} from "./notion.utils";

class ServerSideCmsClient {
  private notionContentClient: NotionAPI;
  private notionApiClient: Client;

  constructor() {
    this.notionContentClient = new NotionAPI({
      activeUser: process.env.NOTION_ACTIVE_USER,
      authToken: process.env.NOTION_TOKEN_V2,
    });

    this.notionApiClient = new Client({
      auth: process.env.NOTION_API_INTEGRATION_SECRET,
    });
  }

  async getArticles(): Promise<Article[]> {
    const { results } = await this.notionApiClient.databases.query({
      database_id: process.env.BLOG_DB_ID ?? "",
    });

    if (isFullNotionResponse(results)) {
      const articles = results.map(({ id, properties }) => ({
        id,
        ...formatNotionPageAttributes(properties),
      }));

      return articles;
    }

    throw new Error("oops");
  }

  async getArticleContent(slug: string) {
    const { results } = await this.notionApiClient.databases.query({
      database_id: process.env.BLOG_DB_ID ?? "",
      filter: {
        property: "slug",
        rich_text: { equals: slug },
      },
    });

    const id = results[0]?.id;

    if (id === undefined) throw new Error("No Article Found");

    return await this.notionContentClient.getPage(id);
  }
}

export const serverSideCmsClient = new ServerSideCmsClient();
