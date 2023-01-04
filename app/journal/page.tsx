import { serverSideCmsClient } from "api/services/cms/cms.client";
import { JournalEntryRow } from "components/Journal/JournalEntryRow";
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
      {journalEntries
        .sort((a, b) => (a.date > b.date ? -1 : 1))
        .map((journalEntry) => (
          <JournalEntryRow key={journalEntry.slug} entry={journalEntry} />
        ))}
    </div>
  );
}
