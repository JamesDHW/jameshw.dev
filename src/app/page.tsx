import Image from "next/image";
import Link from "next/link";
import { BlogHighlightCard } from "components/Home/BlogHighlightCard/BlogHighlightCard";
import avatar from "/public/avatar.png";
import { BookCover } from "components/Home/BookCover/BookCover";
import { Carousel } from "components/Common/Carousel/Carousel";
import { ArrowRightIcon } from "icons/arrow-right";
import { VideoIcon } from "icons/video";
import { Divider } from "components/Common/Divider/Divider";
import { MY_READING_LIST, PATHS } from "./constants";

export default function Home() {
  return (
    <div className="px-8">
      <div className="flex sm:flex-row flex-col-reverse justify-between">
        <div className="flex flex-col justify-top align-top mb-8 sm:mb-14 text-center sm:text-left">
          <h1 className="font-bold text-2xl md:text-4xl mb-8 tracking-tight text-gray-700 dark:text-white">
            James Haworth Wheatman
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 md:text-xl text-xl">
            <span className="font-semibold">Tech Lead</span> at{" "}
            <Link
              className="font-semibold underline"
              href="https://www.theodo.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              Theodo
            </Link>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:mr-4">
            I help people do good things with software!
          </p>
        </div>
        <div className="relative mx-auto min-w-[225px] w-[225px] h-[225px] overflow-hidden rounded-full m-5 hover:scale-[1.05] transition-all hover:shadow-xl shadow-md">
          <Image
            alt="James Haworth Wheatman"
            src={avatar}
            className="object-cover"
            placeholder="blur"
            fill
          />
        </div>
      </div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-6">
        Articles and Talks
      </h3>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 pb-4">
        <BlogHighlightCard
          title="What Even is Tech Quality and Why Should I Care?"
          slug="2023-01-31/what-is-tech-quality"
          gradient="from-gray-700 to-gray-300"
          Icon={VideoIcon}
          callToActionText="Watch now..."
        />
        <BlogHighlightCard
          title="What Does it Mean to Be a Tech Lead in a Lean Software Company?"
          slug="2024-01-24/lean-tech-lead"
          gradient="from-gray-300 to-gray-600"
        />
        <BlogHighlightCard
          title="What Does it Mean to Be a Good Software Engineer?"
          slug="2022-12-18/how-to-be-a-good-software-engineer"
          gradient="from-gray-700 to-gray-300"
        />
        <BlogHighlightCard
          title="Supercharge your Learning with This One Tool for Programmers!"
          slug="2023-04-02/development-journal"
          gradient="from-gray-400 to-gray-500"
        />
        <BlogHighlightCard
          title="Universal Apps: A Single, Unified Codebase Powering iOS, Android, macOS, Windows, and Web"
          slug="2023-09-24/universal-application-architecture"
          gradient="from-gray-600 to-gray-400"
        />
        <BlogHighlightCard
          title="Principles Gathered from Clean Code: A Handbook of Agile Software Craftsmanship"
          slug="2022-02-05/principles-from-clean-code"
          gradient="from-gray-700 to-gray-300"
        />
      </div>
      <Link className="flex text-lg justify-end" href={PATHS.BLOG}>
        More articles and talks
        <span className="my-auto">
          <ArrowRightIcon width={20} height={20} />
        </span>
      </Link>
      <Divider />
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-6">
        Are We on the Same Page?
      </h3>
      <Carousel>
        {MY_READING_LIST.map(({ title, uri }, i) => (
          <BookCover title={title} uri={uri} key={`${title}-${i}`} />
        ))}
      </Carousel>
      <Link className="flex text-lg justify-end mb-4" href={PATHS.RESOURCES}>
        More resources{" "}
        <span className="my-auto">
          <ArrowRightIcon width={20} height={20} />
        </span>
      </Link>
    </div>
  );
}
