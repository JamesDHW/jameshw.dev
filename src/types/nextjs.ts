export type PageProps<T extends PageParams | CatchAllPageParams> = {
  params: Promise<T>;
};

export type PageParams = {
  slug: string;
};

export type CatchAllPageParams = {
  slug: string[];
};
