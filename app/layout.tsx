import "@styles/globals.css";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html className="dark h-full">
      <head>
        <title>Website</title>
      </head>
      <body className="overflow-y-scroll dark:bg-zinc-900 text-sky-500 text-3xl">
        {children}
      </body>
    </html>
  );
}
