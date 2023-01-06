import { Chip } from "components/Common/Chip";

export const ResourcesLinkCardSkeleton = () => (
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
