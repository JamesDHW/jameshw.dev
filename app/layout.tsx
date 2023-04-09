import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "styles/ThemeProvider";
import { Navbar } from "components/Layout/Navbar";
import { Footer } from "components/Layout/Footer";
import "styles/globals.css";

// Notion CSS
import "react-notion-x/src/styles.css";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-tomorrow.css";

type RootPageProps = { children: ReactNode };

const RootLayout: FC<RootPageProps> = ({ children }) => {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className="flex flex-col justify-between h-full max-w-3xl m-auto bg-white dark:bg-gray-900">
        <ThemeProvider attribute="class">
          <div className="flex flex-col justify-center">
            <Navbar />
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "James Haworth Wheatman",
};

export default RootLayout;
