import { serverSideCmsClient } from "server/services/cms/cms.client";
import { BlogList } from "components/Blog/BlogList/BlogList";
import { isArticle } from "types/guards";

export default async function Blog() {
  const articles = await serverSideCmsClient.getDatabaseEntries(
    process.env.BLOG_DB_ID,
    isArticle
  );

  return (
    <div className="flex flex-col ">
      <BlogList data={articles} />
    </div>
  );
}

// Invalidate the cached page every day
export const revalidate = 86400;
