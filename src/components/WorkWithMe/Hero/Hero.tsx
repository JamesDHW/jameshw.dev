import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeftIcon } from "icons/arrow-left";

type HeroProps = {
  kicker: string;
  title: ReactNode;
  description: string;
  ctaHref: string;
  ctaLabel?: string;
  backHref?: string;
};

export const Hero = ({
  kicker,
  title,
  description,
  ctaHref,
  ctaLabel = "Get in Touch",
  backHref = "/work-with-me",
}: HeroProps) => {
  return (
    <>
      <div className="sticky top-20 py-2 z-40 bg-white dark:bg-gray-900">
        <div className="w-full max-w-4xl py-2 flex justify-between items-center">
          <div className="hidden sm:flex items-center gap-2">
            <Link href={backHref}>
              <ArrowLeftIcon className="w-8 h-8 text-gray-800 dark:text-gray-200" />
            </Link>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {kicker}
            </h2>
          </div>

          <a
            href={ctaHref}
            className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-semibold bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-100 transition sm:static sm:bottom-auto sm:right-auto sm:z-auto"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
      <div>

        <div className="max-w-3xl ml-4">
          <h1 className="text-gray-900 dark:text-gray-100 text-3xl sm:text-5xl font-bold sm:my-24">
            {title}
          </h1>

          <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg my-16">
            {description}
          </p>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />
      </div>
    </>
  );
};

