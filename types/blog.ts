export type Article = {
  slug: string;
  title: string;
  author: string;
  summary: string;
  tags: Tag[];
  published: { start: Date };
};

type Tag = {
  color: string;
  name: string;
};
