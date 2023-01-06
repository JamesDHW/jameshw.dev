import Link from "next/link";
import { FC } from "react";
import { Chip } from "components/Common/Chip";
import { LearningResource } from "types/cms";
import { RESOURCE_ICONS } from "app/resources/constants";

type ResourcesLinkCardProps = { entry?: LearningResource };

export const ResourcesLinkCard: FC<ResourcesLinkCardProps> = ({ entry }) => {
  if (entry === undefined) return <ResourcesLinkCardSkeleton />;

  const { title, uri, type, tags } = entry;
  const ResourceTypeIcon = RESOURCE_ICONS[type.name];

  return (
    <Link
      href={uri}
      target="_blank"
      className="flex flex-row w-full p-2 my-1 shadow hover:scale-[1.01] transition-all"
    >
      {ResourceTypeIcon && (
        <ResourceTypeIcon width={25} height={25} className="m-2 my-auto" />
      )}
      <div className="flex sm:flex-row flex-col w-full justify-between">
        <p className="my-auto px-2">{title}</p>
        {tags.length > 0 && (
          <div className="flex flex-row gap-1 sm:my-auto my-1 px-2">
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
  <div className="flex flex-row w-full p-2 my-1 shadow hover:scale-[1.01] transition-all">
    <div role="status" className="animate-pulse w-full">
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 m-2" />
    </div>
    <div className="flex sm:flex-row flex-col w-full justify-between">
      <div className="my-auto px-2">
        <div role="status" className="animate-pulse w-full">
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 m-2" />
        </div>
      </div>
      <div className="flex flex-row gap-1 sm:my-auto my-1 px-2">
        <Chip>
          <div role="status" className="animate-pulse w-16">
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 my-1" />
          </div>
        </Chip>
      </div>
    </div>
  </div>
);
