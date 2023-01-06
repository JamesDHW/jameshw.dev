import { ResourcesHeader } from "components/Resources/ResourcesHeader";
import { ResourcesLinkCard } from "components/Resources/ResourcesLinkCard";

export default function ResourcesLoading() {
  return (
    <div className="flex flex-col px-8">
      <ResourcesHeader />
      <div className="my-4">
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
        <ResourcesLinkCard />
      </div>
    </div>
  );
}
