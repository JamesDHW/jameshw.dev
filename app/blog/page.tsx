import Link from "next/link";
import { Chip } from "components/General/Chip";
import { serverSideCmsClient } from "api/services/notion/notion.client";

export default async function Blog() {
  const articles = await serverSideCmsClient.getArticles();

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-5 text-black dark:text-white">
        Articles
      </h1>
      {articles
        .filter(({ published }) => new Date(published.start) < new Date())
        .map(({ slug, title, author, summary, tags }) => (
          <Link key={slug} href={`/blog/${slug}`} className="w-full py-4">
            <div className="w-full">
              <div className="flex flex-col justify-between md:flex-row">
                <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                  {title}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{summary}</p>
              {tags.length !== 0 && (
                <div className="flex flex-row pt-4">
                  {tags.map(({ name }) => (
                    <Chip key={name} className="mr-3">
                      {name}
                    </Chip>
                  ))}
                </div>
              )}
              <hr className="my-4 border-gray-500" />
            </div>
          </Link>
        ))}
    </div>
  );
}
