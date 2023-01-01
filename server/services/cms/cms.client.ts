import { NotionAPI } from "notion-client";
import { Client } from "@notionhq/client";
import { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import { ExtendedRecordMap } from "notion-types";
import { Article, JournalEntry } from "types/blog";
import { isArticle, isJournalEntry } from "types/guards";
import {
  formatNotionPageAttributes,
  isNonEmptyNonPartialNotionResponse,
} from "./cms.utils";
import { NotionDatabaseProperty } from "./cms.types";

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

  async getDatabaseEntries(
    databaseId: string
  ): Promise<{ [key: string]: NotionDatabaseProperty }[]> {
    const { results } = await this.notionApiClient.databases.query({
      database_id: databaseId,
    });

    if (results.length === 0) return [];

    if (isNonEmptyNonPartialNotionResponse(results)) {
      const entries = results.map(({ id, properties }) => {
        return {
          ...formatNotionPageAttributes(properties),
          id,
        };
      });

      return entries;
    }

    throw new Error("Partial response returned by Notion API");
  }

  async getArticles(): Promise<Article[]> {
    if (process.env.BLOG_DB_ID === undefined)
      throw new Error("env.BLOG_DB_ID not provided");

    const databaseEntries = await this.getDatabaseEntries(
      process.env.BLOG_DB_ID
    );

    return databaseEntries.filter(isArticle);
  }

  async getJournalEntries(): Promise<JournalEntry[]> {
    if (process.env.JOURNAL_DB_ID === undefined)
      throw new Error("env.JOURNAL_DB_ID not provided");

    const databaseEntries = await this.getDatabaseEntries(
      process.env.JOURNAL_DB_ID
    );

    return databaseEntries.filter(isJournalEntry);
  }

  async getPageContent(
    databaseId: string,
    filter: QueryDatabaseParameters["filter"]
  ): Promise<ExtendedRecordMap> {
    const { results } = await this.notionApiClient.databases.query({
      database_id: databaseId,
      filter,
    });

    const id = results[0]?.id;

    if (id === undefined) throw new Error("No Page Found");

    return await this.notionContentClient.getPage(id);
  }

  async getArticleContent(date: string, slug: string) {
    if (process.env.BLOG_DB_ID === undefined)
      throw new Error("env.BLOG_DB_ID not provided");

    return await this.getPageContent(process.env.BLOG_DB_ID, {
      and: [
        { property: "published", date: { equals: date } },
        {
          property: "slug",
          rich_text: { equals: slug },
        },
      ],
    });
  }

  async getJournalContent(date: string, slug: string) {
    if (process.env.JOURNAL_DB_ID === undefined)
      throw new Error("env.BLOG_DB_ID not provided");

    return await this.getPageContent(process.env.JOURNAL_DB_ID, {
      and: [
        { property: "date", date: { equals: date } },
        {
          property: "slug",
          rich_text: { equals: slug },
        },
      ],
    });
  }
}

export const serverSideCmsClient = new ServerSideCmsClient();
