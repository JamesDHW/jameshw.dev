import { Suspense } from "react";
import { ResourcesLinkCardSkeleton } from "components/Resources/ResourcesLinkCardSkeleton/ResourcesLinkCardSkeleton";
import { ResourceList } from "components/Resources/ResourceList/ResourceList";

export default function ResourcesLoading() {
  return (
    <div className="flex flex-col">
      <Suspense>
        <ResourceList data={[]} />
      </Suspense>
      <div className="my-4">
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
        <ResourcesLinkCardSkeleton />
      </div>
    </div>
  );
}
