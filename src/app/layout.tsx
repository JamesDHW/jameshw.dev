import type { Metadata } from "next";
import { FC, ReactNode } from "react";

type RootLayoutProps = { children: ReactNode };

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return children;
};

export const metadata: Metadata = {
  title: "James Haworth Wheatman",
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ],
};

export default RootLayout;
