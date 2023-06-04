import { FC } from "react";
import { Skeleton } from "src/components/Common/Skeleton";

export const ContentPageLoadingState: FC = () => {
  return (
    <div className="flex flex-col mt-20 px-8">
      <Skeleton numberOfLineGroups={9} />
    </div>
  );
};
