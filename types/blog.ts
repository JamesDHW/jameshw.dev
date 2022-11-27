export type Article = {
  slug: string;
  title: string;
  author: string;
  summary: string;
  tags: Tag[];
};

type Tag = {
  color: string;
  name: string;
};
