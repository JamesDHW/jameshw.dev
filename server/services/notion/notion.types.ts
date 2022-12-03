import { TimeZoneRequest } from "types/blog";

export enum NotionBlockTypes {
  rich_text = "rich_text",
  multi_select = "multi_select",
  title = "title",
  last_edited_time = "last_edited_time",
  date = "date",
}

export type MultiSelectProperty = { color: string; name: string };
export type DateProperty = {
  start: string;
  end: string | null;
  time_zone: TimeZoneRequest | null;
};
