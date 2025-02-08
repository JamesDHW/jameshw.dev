import { ReactNode } from "react";
import { ResourcesHeader } from "components/Resources/ResourcesHeader/ResourcesHeader";

export default function Resources({ children }: { children: ReactNode }) {
  return (
    <div className="px-8">
      <ResourcesHeader />
      {children}
    </div>
  );
}
