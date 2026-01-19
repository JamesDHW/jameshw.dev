import RSS from "rss";
import { DOMAIN, PATHS } from "app/constants";
import { serverSideCmsClient } from "server/services/cms/cms.client";
import { isArticle, isJournalEntry } from "types/guards";

const ONE_DAY_IN_MINS = 1440;
const AUTHOR = "James Haworth Wheatman";

export async function GET() {
  const feed = new RSS({
    title: "James Haworth Wheatman: Blog and Development Journal",
    description:
      "An RSS feed for my website - you can consume this to be notified whenever I post something. \
      I'm a Tech Lead on full-stack web and mobile applications and I write about Tech Quality,\
      Training, and Leadership amongst other things that interest me!",
    feed_url: `${DOMAIN}/feed.xml`,
    site_url: DOMAIN,
    image_url: `${DOMAIN}/avatar.png`,
    language: "en-GB",
    pubDate: new Date().toUTCString(),
    ttl: ONE_DAY_IN_MINS,
  });

  const articles = await serverSideCmsClient.getDatabaseEntries(
    process.env.BLOG_DB_ID,
    isArticle
  );

  const articleItems = articles.map(
    ({ title, summary, tags, slug, published }) => ({
      title: title,
      description: summary,
      url: `${DOMAIN}${PATHS.BLOG}/${published}/${slug}`,
      categories: tags.map(({ name }) => name),
      author: AUTHOR,
      date: published,
    })
  );

  const journals = await serverSideCmsClient.getDatabaseEntries(
    process.env.JOURNAL_DB_ID,
    isJournalEntry
  );

  const journalItems = journals.map(({ title, tags, slug, date }) => ({
    title: title,
    description: `Development Journal Entry made on ${date}`,
    url: `${DOMAIN}${PATHS.JOURNAL}/${date}/${slug}`,
    categories: tags.map(({ name }) => name),
    author: AUTHOR,
    date: date,
  }));

  const rssItems = articleItems
    .concat(journalItems)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  rssItems.forEach((item) => feed.item(item));

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

export const revalidate = 86400; // 1 day in seconds
