import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { handlerOptions } from "server/utils/handler.utils";
import { getArticles } from "server/handlers/articles/list";

const handler = nc<NextApiRequest, NextApiResponse>(handlerOptions).get(
  getArticles
);

export default handler;
