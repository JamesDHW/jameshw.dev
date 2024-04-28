import RSS from "rss";
import { DOMAIN, PATHS } from "app/constants";
import { serverSideCmsClient } from "server/services/cms/cms.client";
import { isArticle } from "types/guards";

const ONE_DAY_IN_MINS = 1440;
const AUTHOR = "James Haworth Wheatman";

export async function GET() {
  const feed = new RSS({
    title: "James Haworth Wheatman: Blog",
    description:
      "An RSS feed for my blog - you can consume this to be notified whenever I post something. \
      I'm a Tech Lead on full-stack web and mobile applications and I write about Tech Quality,\
      Training, and Leadership amongst other things that interest me!",
    feed_url: `${DOMAIN}/blog.xml`,
    site_url: `${DOMAIN}${PATHS.BLOG}`,
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

  const rssItems = articleItems.sort((a, b) => (a.date > b.date ? -1 : 1));

  rssItems.forEach((item) => feed.item(item));

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

export const revalidate = ONE_DAY_IN_MINS * 60;
