import { ReactNode } from "react";
import { BlogHeader } from "components/Blog/BlogHeader/BlogHeader";

export default function Blog({ children }: { children: ReactNode }) {
  return (
    <div className="px-8">
      <BlogHeader />
      {children}
    </div>
  );
}
