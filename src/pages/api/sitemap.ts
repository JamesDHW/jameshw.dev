/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { NextApiRequest, NextApiResponse } from "next";
import { serverSideCmsClient } from "src/server/services/cms/cms.client";
import { isArticle, isJournalEntry } from "src/types/guards";
import { DOMAIN, PATHS } from "src/app/constants";

const getSitemapRoute = (path: string) => {
  return `
    <url>
        <loc>${DOMAIN}${path}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    </url>`;
};

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  const articles = await serverSideCmsClient.getDatabaseEntries(
    process.env.BLOG_DB_ID,
    isArticle
  );
  const journals = await serverSideCmsClient.getDatabaseEntries(
    process.env.JOURNAL_DB_ID,
    isJournalEntry
  );

  res.send(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    ${Object.values(PATHS).map((path) => getSitemapRoute(path))}
    ${articles.map(({ slug, published }) =>
      getSitemapRoute(`${PATHS.BLOG}/${published}/${slug}`)
    )}
    ${journals.map(({ slug, date }) =>
      getSitemapRoute(`${PATHS.JOURNAL}/${date}/${slug}`)
    )}
    </urlset>`);
}
