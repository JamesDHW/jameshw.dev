import { ReactNode } from "react";
import { ThemeProvider } from "styles/ThemeProvider";
import { Navbar } from "components/Layout/Navbar";
import { Footer } from "components/Layout/Footer";
import "styles/globals.css";

// Notion CSS
import "react-notion-x/src/styles.css";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism-tomorrow.css";

type PageProps = { children: ReactNode };

export default function RootLayout({ children }: PageProps) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body className="flex flex-col justify-between h-full overflow-y-scroll max-w-3xl m-auto dark:bg-gray-900">
        <ThemeProvider attribute="class">
          <div className="flex flex-col justify-center px-8">
            <Navbar />
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
