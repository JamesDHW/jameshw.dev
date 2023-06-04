import { serverSideCmsClient } from "src/server/services/cms/cms.client";
import { JournalEntryList } from "src/components/Journal/JournalEntryList";
import { JournalHeader } from "src/components/Journal/JournalHeader";
import { isJournalEntry } from "src/types/guards";

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
