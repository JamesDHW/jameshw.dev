import Image from "next/image";
import { BlogHighlightCard } from "components/Blog/BlogHighlightCard";
import avatar from "/public/avatar.png";

export default function Home() {
  return (
    <div className="px-8">
      <div className="flex sm:flex-row flex-col-reverse justify-between">
        <div className="flex flex-col justify-top align-top mb-8 sm:mb-24 text-center sm:text-left">
          <h1 className="font-bold text-3xl md:text-4xl mb-8 tracking-tight text-gray-700 dark:text-white">
            James Haworth Wheatman
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 md:text-xl text-xl">
            Architect Developer at <span className="font-semibold">Theodo</span>
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
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6">
        Articles
      </h3>
      <div className="flex gap-6 flex-col md:flex-row">
        <BlogHighlightCard
          slug="how-to-be-a-good-software-engineer"
          title="What does it mean to be a good Software Engineer?"
          gradient="from-gray-700 to-gray-300"
        />
        <BlogHighlightCard
          slug="serverless-for-long-computational-tasks"
          title="AWS Fargate: harness the power of serverless for long-running computational tasks"
          gradient="from-gray-300 to-gray-500"
        />
        <BlogHighlightCard
          slug="principles-from-clean-code"
          title="Principles gathered from Clean Code: A Handbook of Agile Software Craftsmanship"
          gradient="from-gray-700 to-gray-300"
        />
      </div>
    </div>
  );
}
