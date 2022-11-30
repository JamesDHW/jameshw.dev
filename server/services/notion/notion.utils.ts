import {
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import {
  DateProperty,
  MultiSelectProperty,
  NotionBlockTypes,
} from "./notion.types";

export const notionDatabasePropertyResolver = (
  prop: PageObjectResponse["properties"][string]
): string | MultiSelectProperty[] | DateProperty | null => {
  const type = prop["type"];

  switch (type) {
    case NotionBlockTypes.rich_text:
      return richTextValueResolver(prop[NotionBlockTypes.rich_text]);
    case NotionBlockTypes.multi_select:
      return multiSelectValueResolver(prop[NotionBlockTypes.multi_select]);
    case NotionBlockTypes.title:
      return titleValueResolver(prop[NotionBlockTypes.title]);
    case NotionBlockTypes.last_edited_time:
      return prop[NotionBlockTypes.last_edited_time];
    case NotionBlockTypes.date:
      return prop[NotionBlockTypes.date];
    default:
      throw new Error("Notion Block Resolver Not Found");
  }
};

const richTextValueResolver = (prop: RichTextItemResponse[]): string => {
  return prop[0].plain_text;
};

const titleValueResolver = (prop: RichTextItemResponse[]): string => {
  return prop[0].plain_text;
};

const multiSelectValueResolver = (
  prop: MultiSelectProperty[]
): MultiSelectProperty[] => {
  return prop.map(({ name, color }) => ({
    name,
    color,
  }));
};