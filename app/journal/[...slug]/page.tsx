import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import { serverSideCmsClient } from "api/services/cms/cms.client";
import { NotionRenderer } from "components/Common/NotionRenderer";

import { CatchAllPageParams, PageProps } from "types/nextjs";
import { isJournalEntry, isTwoStringArray } from "types/guards";

export default async function JournalPage({
  params: { slug: pathParams },
}: PageProps<CatchAllPageParams>) {
  if (!isTwoStringArray(pathParams)) throw notFound();

  const [date, slug] = pathParams;
  const journalEntry = await getJournalEntry(date, slug);

  return (
    <div className="mb-8">
      <NotionRenderer recordMap={journalEntry} />
    </div>
  );
}

const getJournalEntry = cache(async (date: string, slug: string) => {
  try {
    return await serverSideCmsClient.getPageContent(process.env.JOURNAL_DB_ID, {
      and: [
        { property: "date", date: { equals: date } },
        {
          property: "slug",
          rich_text: { equals: slug },
        },
      ],
    });
  } catch {
    throw notFound();
  }
});

export async function generateStaticParams() {
  const journalEntries = await serverSideCmsClient.getDatabaseEntries(
    process.env.JOURNAL_DB_ID,
    isJournalEntry
  );

  return journalEntries.map(({ date, slug }) => ({ slug: [date, slug] }));
}

export async function generateMetadata({
  params: { slug: pathParams },
}: PageProps<CatchAllPageParams>): Promise<Metadata> {
  const [published, journalSlug] = pathParams;
  const [journal] = (
    await serverSideCmsClient.getDatabaseEntries(
      process.env.JOURNAL_DB_ID,
      isJournalEntry
    )
  ).filter(({ date, slug }) => date === published && journalSlug === slug);

  return {
    title: journal?.title,
    authors: { name: "James Haworth Wheatman" },
    keywords: journal?.seoKeywords?.map(({ name }) => name) ?? [],
  };
}
