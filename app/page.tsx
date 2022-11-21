import { Suspense } from "react";
import Image from "next/image";
import { BlogHighlightCard } from "components/Blog/BlogHighlightCard";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <div className="flex sm:flex-row flex-col-reverse justify-between">
        <div className="flex flex-col justify-center align-middle mb-8 sm:mb-24 text-center sm:text-left">
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
        <div className="flex sm:w-[200px] w-full justify-center mb-12">
          <Image
            alt="James Haworth Wheatman"
            height={200}
            width={200}
            src="/av-2.png"
            priority
            className="rounded-full sm:grayscale hover:grayscale-0 sm:hover:scale-[1.1] scale-[1.1] sm:scale-[1.0] transition duration-0 hover:duration-1000"
          />
        </div>
      </div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
        Articles
      </h3>
      <div className="flex gap-6 flex-col md:flex-row">
        <BlogHighlightCard
          slug="serverless-for-long-computational-tasks"
          title="AWS Fargate: harness the power of serverless for long-running computational tasks"
          gradient="from-gray-300 to-gray-500"
        />
        <BlogHighlightCard
          slug="writing-a-native-ionic-plugin-for-capacitor"
          title="Writing a native Ionic plugin for Capacitor in less than 30 minutes"
          gradient="from-gray-500 to-gray-700"
        />
        <BlogHighlightCard
          slug="principles-from-clean-code"
          title="Principles gathered from Clean Code: A Handbook of Agile Software Craftsmanship"
          gradient="from-gray-700 to-gray-300"
        />
      </div>
    </Suspense>
  );
}
