import { serverSideCmsClient } from "server/services/cms/cms.client";
import { JournalEntryList } from "components/Journal/JournalEntryList";
import { JournalHeader } from "components/Journal/JournalHeader";
import { isJournalEntry } from "types/guards";

export default async function Journal() {
  const journalEntries = await serverSideCmsClient.getDatabaseEntries(
    process.env.JOURNAL_DB_ID,
    isJournalEntry
  );

  return (
    <div className="flex flex-col px-8">
      <JournalHeader />
      <JournalEntryList data={journalEntries} />
    </div>
  );
}

// Invalidate the cached page every day
export const revalidate = 86400;
