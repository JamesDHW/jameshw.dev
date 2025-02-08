import { ReactNode } from "react";
import { JournalHeader } from "components/Journal/JournalHeader/JournalHeader";

export default function Journal({ children }: { children: ReactNode }) {
  return (
    <div className="px-8">
      <JournalHeader />
      {children}
    </div>
  );
}
