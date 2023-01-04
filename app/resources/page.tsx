import { ResourcesHeader } from "components/Resources/ResourcesHeader";
import { ResourcesLinkCard } from "components/Resources/ResourcesLinkCard";
import { serverSideCmsClient } from "api/services/cms/cms.client";
import { isLearningResource } from "types/guards";

export default async function Resources() {
  const resources = await serverSideCmsClient.getDatabaseEntries(
    process.env.RESOURCES_DB_ID,
    isLearningResource
  );

  return (
    <div className="flex flex-col px-8">
      <ResourcesHeader />
      {resources.map((resource) => (
        <ResourcesLinkCard key={resource.id} entry={resource} />
      ))}
    </div>
  );
}
