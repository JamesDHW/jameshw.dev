"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col justify-between max-w-2xl mx-auto mb-16 px-8">
      <div className="font-bold text-center tracking-tight">
        <h1 className="text-8xl my-4">418</h1>
        <h2 className="text-xl md:text-3xl my-4">~ I{`'`}m a teapot ~</h2>
      </div>
      <div className="my-8">
        <p className="text-gray-600 dark:text-gray-400 text-justify">
          The{" "}
          <Link
            className="font-semibold"
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418"
            target="_blank"
            rel="noreferrer"
          >
            HTTP 418
          </Link>{" "}
          I{`'`}m a teapot client error response code indicates that the server
          refuses to brew coffee because it is, permanently, a teapot. A
          combined coffee/tea pot that is temporarily out of coffee should
          instead return 503. This error is a reference to Hyper Text Coffee Pot
          Control Protocol defined in April Fools{`'`} jokes in 1998 and 2014.
        </p>
        <p className="text-gray-600 dark:text-gray-400 my-8 text-xl sm:text-3xl text-center font-bold">
          (Sorry, something went wrong!)
        </p>
      </div>
      <Link
        href="/"
        className="bg-gray-200 rounded-lg dark:bg-gray-600 mx-auto p-3 hover:ring-2 ring-gray-300 transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
