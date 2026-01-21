import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import "styles/globals.css";

type ResumeLayoutProps = { 
  children: ReactNode;
};

const ResumeLayout: FC<ResumeLayoutProps> = ({ children }) => {
  return children;
};

export const metadata: Metadata = {
  title: "James Haworth Wheatman - Resume",
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ],
};

export default ResumeLayout;
