import { serverSideCmsClient } from "api/services/cms/cms.client";
import { BlogLinkCard } from "components/Blog/BlogLinkCard";

export default async function Blog() {
  const articles = await serverSideCmsClient.getArticles();

  return (
    <div className="flex flex-col px-8">
      <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-5 text-black dark:text-white">
        Articles
      </h1>
      <p>
        I{`'`}ve been writing articles infrequently since 2020 to consolidate my
        learnings on various topics. Packaging ideas into blog posts helps me to
        actively reflect on them; it might also help others to learn too - I
        hope there{`'`}s something interesting here for you!
      </p>
      {articles
        .filter(({ published }) => new Date(published.start) < new Date())
        .sort((a, b) => (a.published.start > b.published.start ? -1 : 1))
        .map((article) => (
          <BlogLinkCard key={article.slug} {...article} />
        ))}
    </div>
  );
}
