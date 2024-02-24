import { FC } from "react";

interface SkeletonProps {
  numberOfLineGroups?: number;
  coverImage?: boolean;
}

export const Skeleton: FC<SkeletonProps> = ({
  numberOfLineGroups = 1,
  coverImage = false,
}) => {
  return (
    <div role="status" className="animate-pulse mb-10">
      {coverImage && (
        <div className="h-96 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
      )}
      <div className="h-10 bg-gray-200 rounded-md dark:bg-gray-700 w-64 mb-4"></div>
      {Array.from({ length: numberOfLineGroups }).map((_, i) => (
        <>
          <div
            key={`lng-skel-${i}`}
            className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 mr-8"
          />
          <div
            key={`mg-skel-${i}`}
            className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 mr-4"
          />
          <div
            key={`sm-skel-${i}`}
            className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 mr-3"
          />
        </>
      ))}
    </div>
  );
};
