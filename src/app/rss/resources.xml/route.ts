import RSS from "rss";
import { DOMAIN, PATHS } from "app/constants";
import { serverSideCmsClient } from "server/services/cms/cms.client";
import { isLearningResource } from "types/guards";

const ONE_DAY_IN_MINS = 1440;

export async function GET() {
  const feed = new RSS({
    title: "James Haworth Wheatman: Learning Resources",
    description:
      "An RSS feed for learning resources I've been following - you can consume this to be notified whenever \
      I post something. I'm a Tech Lead on full-stack web and mobile applications and I write about Tech Quality,\
      Training, and Leadership amongst other things that interest me!",
    feed_url: `${DOMAIN}/resources.xml`,
    site_url: `${DOMAIN}${PATHS.RESOURCES}`,
    image_url: `${DOMAIN}/avatar.png`,
    language: "en-GB",
    pubDate: new Date().toUTCString(),
    ttl: ONE_DAY_IN_MINS,
  });

  const resources = await serverSideCmsClient.getDatabaseEntries(
    process.env.RESOURCES_DB_ID,
    isLearningResource
  );

  const rssItems = resources.map(({ title, tags, uri, Date }) => ({
    title: title,
    description: `Learning resource: ${uri}`,
    url: uri,
    categories: tags.map(({ name }) => name),
    date: Date,
  }));

  rssItems.forEach((item) => feed.item(item));

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

export const revalidate = 86400; // 1 day in seconds
