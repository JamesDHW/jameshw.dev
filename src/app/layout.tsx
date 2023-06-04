import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "src/styles/ThemeProvider";
import { Navbar } from "src/components/Layout/Navbar";
import { Footer } from "src/components/Layout/Footer";
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
        <ThemeProvider>
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
  icons: [
    {
      rel: "icon",
      url: "",
      href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%22100%22>🌊</text></svg>",
    },
  ],
};

export default RootLayout;
