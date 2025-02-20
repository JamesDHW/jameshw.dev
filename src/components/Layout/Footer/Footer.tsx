import Link from "next/link";
import { FC } from "react";
import { NAVBAR_ITEMS, PATHS } from "app/constants";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col justify-center items-start mx-auto w-full px-8">
      <hr className="w-full my-4 border-b-1 border-gray-300 dark:border-gray-600" />
      <div className="w-full grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3 sm:gap-32">
        <div className="flex flex-col space-y-4">
          {NAVBAR_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href={PATHS.TECH}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            Tech
          </Link>
          <Link
            href={PATHS.EXPERIENCE}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            Experience
          </Link>
          <Link
            href={PATHS.RSS}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            RSS
          </Link>
          <Link
            href={PATHS.GIVING}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            Giving What We Can
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="https://github.com/JamesDHW/"
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://twitter.com/JamesDHW"
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            Twitter / X
          </Link>
          <Link
            href="https://www.linkedin.com/in/jamesdhw/"
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};
