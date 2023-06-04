import { ResourcesHeader } from "src/components/Resources/ResourcesHeader";
import { serverSideCmsClient } from "src/server/services/cms/cms.client";
import { isLearningResource } from "src/types/guards";
import { ResourceList } from "src/components/Resources/ResourceList";

export default async function Resources() {
  const resources = await serverSideCmsClient.getDatabaseEntries(
    process.env.RESOURCES_DB_ID,
    isLearningResource
  );

  return (
    <div className="flex flex-col px-8">
      <ResourcesHeader />
      <ResourceList data={resources} />
    </div>
  );
}

// Invalidate the cached page every day
export const revalidate = 86400;
