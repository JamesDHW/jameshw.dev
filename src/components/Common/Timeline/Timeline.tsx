import { FC, ReactNode } from "react";
import Link from "next/link";
import classes from "classnames";
import { ArrowRightIcon } from "icons/arrow-right";
import {
  dateDiff,
  formatDate,
  formatDateRange,
  sortByLatestDate,
} from "./Timeline.helpers.ts";

export type TimelineItem = {
  date: Date;
  startDate?: Date;
  title: string;
  description: ReactNode;
  link?: string;
};

export type TimelineSection = {
  date: Date;
  startDate?: Date;
  title: string;
  description: ReactNode;
  Icon: FC<{ className: string }>;
  link?: string;
  items?: TimelineItem[];
};

interface TimeLineProps {
  timelineSections: TimelineSection[];
}

export const TimeLine: FC<TimeLineProps> = ({ timelineSections }) => {
  return (
    <div className="relative">
      {timelineSections
        .sort(sortByLatestDate)
        .map(({ date, startDate, title, description, Icon, link, items }) => {
          return (
            <ol
              key={title}
              className="relative border-s border-gray-200 dark:border-gray-700"
            >
              <li
                className={classes(
                  "sm:sticky top-20 ml-5 pb-2 mb-3 z-50 bg-white dark:bg-gray-900",
                  "after:absolute after:h-5 after:w-full after:-bottom-5 after:z-50 after:bg-gradient-to-b after:dark:from-gray-900 after:dark:to-transparent after:from-white after:to-transparent"
                )}
              >
                <div className="absolute sm:-start-9 -start-4">
                  <div className="absolute h-8 w-8 bg-gray-200 rounded-full border border-white dark:border-gray-800 dark:bg-gray-700" />
                  <Icon className="absolute h-6 w-6 m-1" />
                </div>
                <h3 className="text-lg py-1 font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {formatDateRange(startDate, date)}
                </time>
                <hr className="w-full pb-2 border-b-1 border-gray-300 dark:border-gray-600" />
                <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {description}
                </div>
                {link !== undefined && (
                  <div>
                    <Link
                      href={link}
                      className="inline-flex mt-2 p-2 px-3 text-sm rounded-lg bg-gray-200 dark:bg-gray-600 hover:ring-1 ring-gray-300 transition-all"
                    >
                      Learn more <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </Link>
                  </div>
                )}
              </li>
              {items?.sort(sortByLatestDate).map((item) => {
                return (
                  <li className="ml-8 pb-4" key={item.title}>
                    <div className="absolute h-3 w-3 my-2 -start-1.5 bg-gray-200 rounded-full border border-white dark:border-gray-800 dark:bg-gray-700" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {formatDateRange(item.startDate, item.date)}
                    </time>
                    <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      {item.description}
                    </div>
                    {item.link !== undefined && (
                      <Link
                        href={item.link}
                        className="inline-flex items-center text-sm bg-gray-200 rounded-lg dark:bg-gray-600 mx-auto p-2 px-3 hover:ring-1 ring-gray-300 transition-all"
                      >
                        Learn more <ArrowRightIcon className="h-5 w-5 ml-2" />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          );
        })}
    </div>
  );
};
