import { Skeleton } from "components/Skeleton";

export default function BlogLoading() {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-5 text-black dark:text-white">
        Articles
      </h1>
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={`article-skel-${i}`} />
      ))}
    </div>
  );
}
