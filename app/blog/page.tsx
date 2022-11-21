import { Suspense } from "react";
import Link from "next/link";
import { Article } from "types/blog";
import { BASE_URL } from "utils/env";
import { getArticles } from "server/handlers/articles/list";
import BlogLoading from "./loading";

const getData = async (): Promise<Article[]> => {
  const res = await fetch(`${BASE_URL}/api/articles`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()) as Article[];
};

export default async function Blog() {
  const articles = await getArticles();

  return (
    <Suspense fallback={<BlogLoading />}>
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-5 text-black dark:text-white">
          Articles
        </h1>
        {articles.map(({ slug, title, author, summary }) => (
          <Link key={slug} href={`/blog/${slug}`} className="w-full">
            <div className="w-full mb-8">
              <div className="flex flex-col justify-between md:flex-row">
                <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                  {title}
                </h4>
                {/* <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
                  {`${new Number(100).toLocaleString()} views`}
                </p> */}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </Suspense>
  );
}
