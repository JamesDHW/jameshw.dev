import { ReactNode } from "react";

export type PageProps =
  | {
      params?: PageParams;
      children?: ReactNode;
    }
  | undefined;

type PageParams = {
  slug?: string;
};
