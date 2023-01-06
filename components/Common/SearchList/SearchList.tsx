"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { SearchIcon } from "icons/search";

interface SearchableListProps<T> {
  children?: ReactNode;
  ListItem: FC<T>;
  fetchData: (query: string) => T[];
}

export const SearchList = <T,>({
  children,
  fetchData,
  ListItem,
}: SearchableListProps<T>) => {
  const [query, setQuerySetState] = useState("");
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    setData(fetchData(query.toLowerCase().trim()));
  }, [fetchData, query]);

  return (
    <div>
      <div className="relative w-full mb-4">
        <input
          aria-label="Search recommendations"
          type="text"
          onChange={(e) => setQuerySetState(e.target.value)}
          placeholder="Search recommendations"
          className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-r-lg border-l-0 dark:border-gray-900 focus:outline-none dark:bg-gray-800 dark:text-gray-100"
        />

        <SearchIcon className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300" />
      </div>
      {children}
      {data.map((element) => (
        <ListItem key={""} {...element} />
      ))}
    </div>
  );
};