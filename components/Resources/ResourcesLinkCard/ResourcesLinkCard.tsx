import Link from "next/link";
import { FC } from "react";
import { Chip } from "components/Common/Chip";
import { LearningResource } from "types/cms";
import { RESOURCE_ICONS } from "app/constants";

type ResourcesLinkCardProps = { entry?: LearningResource };

export const ResourcesLinkCard: FC<ResourcesLinkCardProps> = ({ entry }) => {
  if (entry === undefined) return <ResourcesLinkCardSkeleton />;

  const { title, uri, type, tags } = entry;
  const ResourceTypeIcon = RESOURCE_ICONS[type.name];

  return (
    <Link
      href={uri}
      target="_blank"
      className="flex flex-col sm:flex-row w-full p-2 shadow-md justify-between hover:scale-[1.01] transition-all"
    >
      <div className="flex">
        {ResourceTypeIcon && (
          <ResourceTypeIcon width={25} height={25} className="my-auto m-2" />
        )}
        <p className="my-auto flex-grow-0">{title}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 py-2 sm:py-0 my-auto">
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

const ResourcesLinkCardSkeleton = () => (
  <div className="flex flex-col sm:flex-row w-full p-2 shadow-md justify-between">
    <div className="flex-col my-auto">
      <p className="italic">
        <div role="status" className="animate-pulse w-full">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 m-2" />
        </div>
      </p>
      <div className="flex flex-row gap-1 font-semibold text-gray-600 dark:text-gray-500">
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
