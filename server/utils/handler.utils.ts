import { NextApiRequest, NextApiResponse } from "next";

export const handlerOptions = {
  onError: ({ message }: Error, _: NextApiRequest, res: NextApiResponse) => {
    const status = 500;
    res.status(500).json({ status, message });
  },
  onNoMatch: (_: NextApiRequest, res: NextApiResponse) => {
    const status = 404;
    res.status(status).json({ status });
  },
};
