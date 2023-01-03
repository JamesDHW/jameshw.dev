import Image from "next/image";
import Link from "next/link";
import { BlogHighlightCard } from "components/Home/BlogHighlightCard";
import avatar from "/public/avatar.png";
import { BookCover } from "components/Home/BookCover";
import { Carousel } from "components/Common/Carousel";
import { MY_READING_LIST } from "./constants";

export default function Home() {
  return (
    <div className="px-8">
      <div className="flex sm:flex-row flex-col-reverse justify-between">
        <div className="flex flex-col justify-top align-top mb-8 sm:mb-24 text-center sm:text-left">
          <h1 className="font-bold text-3xl md:text-4xl mb-8 tracking-tight text-gray-700 dark:text-white">
            James Haworth Wheatman
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 md:text-xl text-xl">
            Architect Developer at{" "}
            <Link
              className="font-semibold"
              href="https://www.theodo.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              Theodo
            </Link>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            I help people do good things with software!
          </p>
        </div>
        <div className="relative mx-auto w-[225px] h-[225px] overflow-hidden rounded-full m-5 hover:scale-[1.05] transition-all hover:shadow-xl shadow-md">
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
        Articles
      </h3>
      <div className="flex gap-6 flex-col md:flex-row overflow-hidden pb-4 mb-12 border-b-2">
        <BlogHighlightCard
          slug="2022-12-18/how-to-be-a-good-software-engineer"
          title="What does it mean to be a good Software Engineer?"
          gradient="from-gray-700 to-gray-300"
        />
        <BlogHighlightCard
          slug="2021-08-21/serverless-for-long-computational-tasks"
          title="AWS Fargate: harness the power of serverless for long-running computational tasks"
          gradient="from-gray-300 to-gray-500"
        />
        <BlogHighlightCard
          slug="2022-02-05/principles-from-clean-code"
          title="Principles gathered from Clean Code: A Handbook of Agile Software Craftsmanship"
          gradient="from-gray-700 to-gray-300"
        />
      </div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-6">
        Are we on the same page?
      </h3>
      <Carousel>
        {MY_READING_LIST.map(({ title, uri }, i) => (
          <BookCover title={title} uri={uri} key={`${title}-${i}`} />
        ))}
      </Carousel>
    </div>
  );
}
