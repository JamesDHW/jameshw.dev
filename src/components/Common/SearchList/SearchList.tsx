"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { SearchIcon } from "icons/search";

interface SearchableListProps<T> {
  children?: ReactNode;
  ListItem: FC<T>;
  fetchData: (query: string) => T[];
  keyExtractor: (element: T) => string;
  placeholder: string;
  initialQuery?: string | null;
}

export const SearchList = <T,>({
  children,
  fetchData,
  keyExtractor,
  ListItem,
  placeholder,
  initialQuery,
}: SearchableListProps<T>): JSX.Element => {
  const [query, setQuerySetState] = useState(initialQuery ?? "");
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    setData(fetchData(query.toLowerCase().trim()));
  }, [fetchData, query]);

  return (
    <div>
      <div className="sticky top-20 pb-2 z-50 bg-white dark:bg-gray-900">
        <div className="flex sm:flex-row flex-col">
          <div className="relative w-full">
            <input
              aria-label={placeholder}
              type="text"
              onChange={(e) => setQuerySetState(e.target.value)}
              placeholder={placeholder}
              value={query}
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-lg dark:border-gray-900 focus:outline-none focus:border-gray-500 dark:focus:border-gray-300 dark:bg-gray-800 dark:text-gray-100"
            />
            <SearchIcon className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300" />
          </div>
          <div className="mx-1 sm:my-auto my-1">{children}</div>
        </div>
      </div>
      <div className="mx-1">
        {data.map((element) => (
          <ListItem key={keyExtractor(element)} {...element} />
        ))}
      </div>
    </div>
  );
};
