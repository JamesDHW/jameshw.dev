import { FC, ReactNode } from "react";

interface BookShelfProps {
  children: ReactNode;
}

export const BookShelf: FC<BookShelfProps> = ({ children }) => {
  return (
    <div className="border-b-2 overflow-hidden">
      <div className="flex gap-6 flex-row animate-scrolling">
        {children}
        {children}
      </div>
    </div>
  );
};
