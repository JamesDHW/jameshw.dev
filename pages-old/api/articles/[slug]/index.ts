import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { handlerOptions } from "server/utils/handler.utils";
import { getArticle } from "server/handlers/articles/[slug]/get";

const handler = nc<NextApiRequest, NextApiResponse>(handlerOptions).get(
  getArticle
);

export default handler;
