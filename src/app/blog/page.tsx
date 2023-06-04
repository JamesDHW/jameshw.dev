import { serverSideCmsClient } from "src/server/services/cms/cms.client";
import { BlogHeader } from "src/components/Blog/BlogHeader";
import { BlogList } from "src/components/Blog/BlogList";
import { isArticle } from "src/types/guards";

export default async function Blog() {
  const articles = await serverSideCmsClient.getDatabaseEntries(
    process.env.BLOG_DB_ID,
    isArticle
  );

  return (
    <div className="flex flex-col px-8">
      <BlogHeader />
      <BlogList data={articles} />
    </div>
  );
}
