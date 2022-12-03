import { serverSideCmsClient } from "api/services/notion/notion.client";
import { BlogLinkCard } from "components/Blog/BlogLinkCard";

export default async function Blog() {
  const articles = await serverSideCmsClient.getArticles();

  return (
    <div className="flex flex-col px-8">
      <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-5 text-black dark:text-white">
        Articles
      </h1>
      {articles
        .filter(({ published }) => new Date(published.start) < new Date())
        .sort((a, b) => (a.published.start > b.published.start ? -1 : 1))
        .map((article) => (
          <BlogLinkCard key={article.slug} {...article} />
        ))}
    </div>
  );
}
