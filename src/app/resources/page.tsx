import { Suspense } from "react";
import { ResourcesHeader } from "components/Resources/ResourcesHeader/ResourcesHeader";
import { serverSideCmsClient } from "server/services/cms/cms.client";
import { isLearningResource } from "types/guards";
import { ResourceList } from "components/Resources/ResourceList/ResourceList";

export default async function Resources() {
  const resources = await serverSideCmsClient.getDatabaseEntries(
    process.env.RESOURCES_DB_ID,
    isLearningResource
  );

  return (
    <div className="flex flex-col px-8">
      <ResourcesHeader />
      <Suspense>
        <ResourceList data={resources} />
      </Suspense>
    </div>
  );
}

// Invalidate the cached page every day
export const revalidate = 86400;
