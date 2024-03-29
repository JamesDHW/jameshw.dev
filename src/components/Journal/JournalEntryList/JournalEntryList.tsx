"use client";

import { FC } from "react";
import { SearchList } from "components/Common/SearchList/SearchList";
import { JournalEntry } from "types/cms";
import { JournalEntryRow } from "../JournalEntryRow/JournalEntryRow";

interface JournalEntryListList {
  data: JournalEntry[];
}

export const JournalEntryList: FC<JournalEntryListList> = ({ data }) => {
  const fetchData = (query: string) =>
    data
      .filter(
        ({ title, tags }) =>
          title.toLowerCase().includes(query) ||
          tags.some(({ name }) => name.toLowerCase().includes(query))
      )
      .sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <SearchList<JournalEntry>
      ListItem={JournalEntryRow}
      fetchData={fetchData}
      keyExtractor={({ id }) => id}
      placeholder="Search Journal Entries"
    />
  );
};
