import { SelectColor } from "server/services/cms/cms.types";
import { ResourceType } from "app/resources/constants";

export type Article = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  tags: MultiSelectOption[];
  published: string;
  seoKeywords?: MultiSelectOption[];
};

export type JournalEntry = {
  id: string;
  slug: string;
  title: string;
  tags: MultiSelectOption[];
  date: string;
  seoKeywords?: MultiSelectOption[];
};

export type LearningResource = {
  id: string;
  uri: string;
  title: string;
  type: LearningResourceType;
  tags: MultiSelectOption[];
  Date: string;
};

type MultiSelectOption = {
  id: string;
  color: SelectColor;
  name: string;
};

type LearningResourceType = {
  id: string;
  color: SelectColor;
  name: ResourceType;
};
