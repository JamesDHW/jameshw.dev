import Link from "next/link";
import { FC } from "react";
import { Chip } from "components/General/Chip";
import { Article } from "types/blog";
import { CalendarIcon } from "icons/calendar";

type BlogLinkCardProps = Article;

export const BlogLinkCard: FC<BlogLinkCardProps> = ({
  slug,
  tags,
  title,
  published,
  summary,
}) => {
  const publishDate = new Date(published.start);

  return (
    <Link key={slug} href={`/blog/${slug}`} className="w-full py-4">
      <p className="text-lg font-medium md:text-xl">{title}</p>
      <div className="flex flex-col sm:flex-row gap-2 py-2 sm:p-2 justify-between">
        <div className="flex flex-row gap-2 items-center text-gray-600 dark:text-gray-500">
          <CalendarIcon />
          <p>{publishDate.toLocaleDateString()}</p>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-row gap-2">
            {tags.map(({ name }) => (
              <Chip key={name}>{name}</Chip>
            ))}
          </div>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-400">{summary}</p>
      <hr className="my-4 border-gray-500" />
    </Link>
  );
};
