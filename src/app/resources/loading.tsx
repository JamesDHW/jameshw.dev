import { Suspense } from "react";
import { ResourcesLinkCardSkeleton } from "components/Resources/ResourcesLinkCardSkeleton/ResourcesLinkCardSkeleton";
import { ResourceList } from "components/Resources/ResourceList/ResourceList";
import { ResourcesHeader } from "components/Resources/ResourcesHeader/ResourcesHeader";

export default function ResourcesLoading() {
  return (
    <div className="flex flex-col px-8">
      <Suspense>
        <ResourcesHeader />
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
