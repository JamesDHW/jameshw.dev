import Link from "next/link";
import { FC } from "react";
import { Chip } from "components/General/Chip";
import { JournalEntry } from "types/blog";
import { CalendarIcon } from "icons/calendar";
import { PATHS } from "app/constants";

type JournalEntryRowProps = { entry?: JournalEntry };

export const JournalEntryRow: FC<JournalEntryRowProps> = ({ entry }) => {
  if (entry === undefined) return <JournalEntryRowSkeleton />;

  const { slug, tags, title, date } = entry;
  const formattedDate = date.replace(new RegExp("/", "g"), "-");

  const fullSlug = `${PATHS.JOURNAL}/${formattedDate}/${slug}`;

  return (
    <Link
      href={fullSlug}
      className="flex flex-col sm:flex-row w-full p-2 shadow-md justify-between hover:scale-[1.01] transition-all"
    >
      <div className="flex-col my-auto">
        <p className="italic">{title}</p>
        <div className="flex flex-row gap-1 font-semibold text-gray-600 dark:text-gray-500">
          <CalendarIcon />
          <p>{new Date(date).toLocaleDateString("en-GB")}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 py-2 sm:px-2 my-auto">
        {tags.length > 0 && (
          <div className="flex flex-row gap-2">
            {tags.map(({ name }) => (
              <Chip key={name}>{name}</Chip>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

const JournalEntryRowSkeleton = () => (
  <div className="flex flex-col sm:flex-row w-full p-2 shadow-md justify-between">
    <div className="flex-col my-auto">
      <p className="italic">
        <div role="status" className="animate-pulse w-96">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 m-2" />
        </div>
      </p>
      <div className="flex flex-row gap-1 font-semibold text-gray-600 dark:text-gray-500">
        <CalendarIcon className="my-auto" />
        <div role="status" className="animate-pulse w-36">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 m-2" />
        </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-2 py-2 sm:px-2 my-auto">
      <Chip>
        <div role="status" className="animate-pulse w-16">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 my-1" />
        </div>
      </Chip>
    </div>
  </div>
);
