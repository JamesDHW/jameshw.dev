export type Article = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  tags: Tag[];
  published: string;
};

export type JournalEntry = {
  id: string;
  slug: string;
  title: string;
  tags: Tag[];
  date: string;
};

type Tag = {
  color: string;
  name: string;
};
