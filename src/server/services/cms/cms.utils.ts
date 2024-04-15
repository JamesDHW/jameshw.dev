import {
  PageObjectResponse,
  PartialPageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionBlockTypes, NotionDatabaseProperty } from "./cms.types";

const notionDatabasePropertyResolver = (
  prop: PageObjectResponse["properties"][string]
): NotionDatabaseProperty => {
  const type = prop["type"];

  switch (type) {
    case NotionBlockTypes.rich_text:
      return richTextValueResolver(prop[NotionBlockTypes.rich_text]);
    case NotionBlockTypes.multi_select:
      return prop.multi_select;
    case NotionBlockTypes.title:
      return titleValueResolver(prop[NotionBlockTypes.title]);
    case NotionBlockTypes.last_edited_time:
      return prop.last_edited_time;
    case NotionBlockTypes.date:
      return prop.date?.start ?? null;
    case NotionBlockTypes.created_time:
      return prop.created_time;
    case NotionBlockTypes.select:
      return prop.select;
    case NotionBlockTypes.url:
      return prop.url;
    default:
      throw new Error(`Notion Block Resolver Not Found For Type: ${type}`);
  }
};

const richTextValueResolver = (prop: RichTextItemResponse[]): string => {
  return prop[0]?.plain_text ?? "";
};

const titleValueResolver = (prop: RichTextItemResponse[]): string => {
  return prop[0]?.plain_text ?? "";
};

export const isNonEmptyNonPartialNotionResponse = (
  results: (PageObjectResponse | PartialPageObjectResponse)[]
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
): results is PageObjectResponse[] => results[0]?.properties !== undefined;

export const formatNotionPageAttributes = (
  properties: PageObjectResponse["properties"]
): { [key: string]: NotionDatabaseProperty } =>
  Object.entries(properties).reduce((acc, [key, prop]) => {
    const value = notionDatabasePropertyResolver(prop);

    return { ...acc, [key]: value };
  }, {} as { [key: string]: NotionDatabaseProperty });
