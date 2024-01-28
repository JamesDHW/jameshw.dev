import classes from "classnames";
import Link from "next/link";
import { FC } from "react";
import { EyeIcon } from "icons/eye";

interface BlogPreviewCardProps {
  slug: string;
  title: string;
  gradient: string;
  Icon?: FC;
  callToActionText?: string;
}

export const BlogHighlightCard: FC<BlogPreviewCardProps> = ({
  slug,
  title,
  gradient,
  Icon = EyeIcon,
  callToActionText = "Read more...",
}) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className={classes(
        "transform transition-all hover:scale-[1.01]",
        "rounded-xl w-full bg-gradient-to-r p-1",
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100">
            {title}
          </h4>
        </div>
        <div className="flex text-gray-800 dark:text-gray-200">
          <Icon className="h-6 w-6 mr-2" />
          <div className="flex text-right text-gray-800 dark:text-gray-200">
            <p className="w-full">{callToActionText}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
