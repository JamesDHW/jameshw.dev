import { serverSideCmsClient } from "api/services/cms/cms.client";
import { BlogHeader } from "components/Blog/BlogHeader";
import { BlogLinkCard } from "components/Blog/BlogLinkCard";

export default async function Blog() {
  const articles = await serverSideCmsClient.getArticles();

  return (
    <div className="flex flex-col px-8">
      <BlogHeader />
      {articles
        .filter(({ published }) => new Date(published) < new Date())
        .sort((a, b) => (a.published > b.published ? -1 : 1))
        .map((article) => (
          <BlogLinkCard key={article.slug} {...article} />
        ))}
    </div>
  );
}
