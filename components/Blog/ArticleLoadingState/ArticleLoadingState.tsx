import { FC } from "react";
import { Skeleton } from "components/General/Skeleton";

export const ArticleLoadingState: FC = () => {
  return (
    <div className="flex flex-col mt-20 px-8">
      <Skeleton numberOfLineGroups={9} />
    </div>
  );
};
