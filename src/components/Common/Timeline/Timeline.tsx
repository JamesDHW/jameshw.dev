import classes from "classnames";
import { FC, ReactNode } from "react";

export type TimeLineItem = {
  date: Date;
  startDate?: Date;
  title: string;
  description: ReactNode;
  Icon?: FC<{ className: string }>;
  link?: string;
};

interface TimeLineProps {
  timelineItems: TimeLineItem[];
}

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });

const dateDiff = (start: Date, end: Date) => {
  const years =
    start.getMonth() <= end.getMonth()
      ? end.getFullYear() - start.getFullYear()
      : end.getFullYear() - start.getFullYear() - 1;

  const months =
    start.getMonth() <= end.getMonth()
      ? end.getMonth() - start.getMonth()
      : 12 + end.getMonth() - start.getMonth();

  let result = "";
  if (years > 0) result += `${years} year${years > 1 ? "s" : ""}`;
  if (years > 0 && months > 0) result += ", ";
  if (months > 0) result += `${months} month${months > 1 ? "s" : ""}`;

  return result;
};

export const TimeLine: FC<TimeLineProps> = ({ timelineItems }) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {timelineItems
        .sort((a, b) => (a.date > b.date ? -1 : 1))
        .map(({ date, startDate, title, description, Icon, link }) => (
          <li className="mb-10 ms-4" key={title}>
            <div
              className={classes(
                "absolute bg-gray-200 rounded-full border border-white dark:border-gray-800 dark:bg-gray-700",
                {
                  "w-7 h-7 -start-3.5 mt-1": Icon !== undefined,
                  "w-3 h-3 -start-1.5 mt-3": Icon === undefined,
                }
              )}
            >
              {Icon !== undefined && <Icon className="h-6 w-6 pt-0.5 pl-0.5" />}
            </div>
            <h3 className="text-lg font-semibold pt-1 text-gray-900 dark:text-white">
              {title}
            </h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {startDate !== undefined && `${formatDate(startDate)} - `}
              {formatDate(date)}
              {startDate !== undefined && ` (${dateDiff(startDate, date)})`}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {description}
            </p>
            {link !== undefined && (
              <a
                href={link}
                className="inline-flex items-center text-sm bg-gray-200 rounded-lg dark:bg-gray-600 mx-auto p-2 px-3 hover:ring-1 ring-gray-300 transition-all"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </li>
        ))}
    </ol>
  );
};
