export enum NotionBlockTypes {
  rich_text = "rich_text",
  multi_select = "multi_select",
  title = "title",
  last_edited_time = "last_edited_time",
  date = "date",
}

export type MultiSelectProperty = { color: string; name: string };

export type NotionDatabaseProperty = string | MultiSelectProperty[] | null;
