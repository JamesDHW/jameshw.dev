import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col justify-center items-start mx-auto w-full px-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-16 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            About Me
          </Link>
          <Link
            href="/blog"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Blog
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/giving"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Giving What We Can
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="https://github.com/JamesDHW/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/jamesdhw/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};
