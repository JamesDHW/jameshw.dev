import { NotionAPI } from "notion-client";
import { Client } from "@notionhq/client";
import {
  PageObjectResponse,
  PartialPageObjectResponse,
  QueryDatabaseParameters,
} from "@notionhq/client/build/src/api-endpoints";
import { ExtendedRecordMap } from "notion-types";
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

  async getDatabaseEntries<T extends Record<string, NotionDatabaseProperty>>(
    databaseId: string | undefined,
    typeGuard: (value: Record<string, NotionDatabaseProperty>) => value is T
  ): Promise<T[]> {
    if (databaseId === undefined) throw new Error("No database id provided");

    const results: (PageObjectResponse | PartialPageObjectResponse)[] =
      await this.getAllEntriesFromPaginated(databaseId);

    if (results.length === 0) return [];

    if (isNonEmptyNonPartialNotionResponse(results)) {
      const entries: Record<string, NotionDatabaseProperty>[] = results.map(
        ({ id, properties }) => {
          return {
            ...formatNotionPageAttributes(properties),
            id,
          };
        }
      );

      return entries.filter(typeGuard);
    }

    throw new Error("Partial response returned by Notion API");
  }

  private async getAllEntriesFromPaginated(databaseId: string) {
    let hasMore = true;
    let results: (PageObjectResponse | PartialPageObjectResponse)[] = [];
    let nextCursor: string | null | undefined;
    while (hasMore) {
      const {
        results: pageResults,
        has_more,
        next_cursor,
      } = await this.notionApiClient.databases.query({
        database_id: databaseId,
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        ...(nextCursor ? { start_cursor: nextCursor } : {}),
      });
      nextCursor = next_cursor;
      results = results.concat(pageResults);
      hasMore = has_more;
    }

    return results;
  }

  async getPageContent(
    databaseId: string | undefined,
    filter: QueryDatabaseParameters["filter"]
  ): Promise<ExtendedRecordMap> {
    if (databaseId === undefined) throw new Error("No database id provided");

    const { results } = await this.notionApiClient.databases.query({
      database_id: databaseId,
      filter,
    });

    const id = results[0]?.id;

    if (id === undefined) throw new Error("No Page Found");

    return await this.notionContentClient.getPage(id);
  }
}

export const serverSideCmsClient = new ServerSideCmsClient();
