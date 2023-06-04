import { ResourcesLinkCardSkeleton } from "src/components/Resources/ResourcesLinkCardSkeleton";
import { ResourcesHeader } from "src/components/Resources/ResourcesHeader";
import { ResourceList } from "src/components/Resources/ResourceList";

export default function ResourcesLoading() {
  return (
    <div className="flex flex-col px-8">
      <ResourcesHeader />
      <ResourceList data={[]} />
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
