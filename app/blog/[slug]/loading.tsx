import { Skeleton } from "components/Skeleton";

export default function ArticleLoading() {
  return (
    <div className="flex flex-col mt-20">
      <Skeleton numberOfLineGroups={9} />
    </div>
  );
}
