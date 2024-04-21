import { PageTitle } from "components/Common/PageTitle/PageTitle";
import { TimeLine } from "components/Common/Timeline/Timeline";
import { EXPERIENCES } from "./constants";

export default function Resume() {
  return (
    <div className="flex flex-col px-8">
      <PageTitle>Experience</PageTitle>
      <p className="text-gray-600 dark:text-gray-400 text-base sm:mr-4 mb-8">
        Here{"'"}s a summary of the organisations and projects I{"'"}ve been
        involved in over the years.
      </p>
      <TimeLine timelineItems={EXPERIENCES} />
    </div>
  );
}
