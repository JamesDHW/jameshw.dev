import Image from "next/image";
import Link from "next/link";
import { HighlightDisplayCard } from "components/Home/HighlightDisplayCard/HighlightDisplayCard";
import avatar1 from "../../../public/avatar1.png";
import { BookCover } from "components/Home/BookCover/BookCover";
import { Carousel } from "components/Common/Carousel/Carousel";
import { ArrowRightIcon } from "icons/arrow-right";
import { VideoIcon } from "icons/video";
import { Divider } from "components/Common/Divider/Divider";
import { TypewriterEffect } from "components/Common/TypewriterEffect/TypewriterEffect";
import { GitHubIcon } from "icons/technologies/infrastructure/github";
import { GitPullRequestIcon } from "icons/git-pull-request";
import { ArticleIcon } from "icons/article";
import { BookIcon } from "icons/book";
import { VsCodeIcon } from "icons/technologies/development/vscode";
import { EyeIcon } from "icons/eye";
import { NpmIcon } from "icons/technologies/infrastructure/npm";
import { MY_READING_LIST, PATHS } from "../constants";

export default function Home() {
  return (
    <div className="px-8">
      <div className="flex sm:flex-row flex-col-reverse justify-between">
        <div className="flex sm:flex-grow flex-col justify-center align-center mb-8 sm:mb-14 text-center sm:text-left">
          <h1 className="font-bold text-3xl md:text-4xl mb-8 tracking-tight text-gray-700 dark:text-white">
            <TypewriterEffect text="James Haworth Wheatman" />
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 md:text-xl text-xl">
            <span className="font-semibold">Engineering Manager</span> at{" "}
            <Link
              className="font-semibold underline"
              href="https://www.theodo.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              Theodo UK
            </Link>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:mr-4">
            I help people do good things with software!
          </p>
        </div>
        <div className="relative mx-auto min-w-[225px] w-[225px] h-[225px] overflow-hidden rounded-full m-5 hover:scale-[1.05] transition-all hover:shadow-2xl shadow-2xl">
          <Image
            alt="James Haworth Wheatman"
            src={avatar1}
            className="object-cover"
            placeholder="blur"
            fill
          />
        </div>
      </div>
      <h3 className="flex flex-row font-bold text-2xl md:text-4xl tracking-tight my-4 text-ice-800 dark:text-white">
        <GitPullRequestIcon className="w-8 md:w-10 h-8 md:h-10 dark:text-ice-800 text-gray-700" />
        &nbsp;Commit History
      </h3>

      <Divider />

      <p className="pb-6">
        While most of my commits happen at work behind closed repos, I have a
        few pet projects...
      </p>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 pb-4">
        <HighlightDisplayCard
          title="dotstrap"
          description="A tiny installer that consumes any dotfiles repo that follows the dotstrap spec. This allows you to bootstrap any Mac with (almost) a single command."
          isSingularCallToAction={false}
          callToActions={[
            {
              Icon: GitHubIcon,
              text: "View source code",
              href: "https://github.com/JamesDHW/dotstrap",
            },
          ]}
        />
        <HighlightDisplayCard
          title="i18n-search"
          description="A Visual Studio Code extension to search directly for translation key usage in your codebase by the keys' translation values—no more hopping via translation files to find occurrences!"
          callToActions={[
            {
              Icon: GitHubIcon,
              text: "View source code",
              href: "https://github.com/JamesDHW/i18n-search",
            },
            {
              Icon: VsCodeIcon,
              text: "Install extension",
              href: "https://marketplace.visualstudio.com/items?itemName=JamesHaworthWheatman.i18n-search&ssr=false#overview",
            },
          ]}
        />
        <HighlightDisplayCard
          title="VSChameleon"
          description="A Visual Studio Code extension designed to dynamically customize the editor and workspace colors based on the active file's context."
          callToActions={[
            {
              Icon: GitHubIcon,
              text: "View source code",
              href: "https://github.com/JamesDHW/vschameleon",
            },
            {
              Icon: VsCodeIcon,
              text: "Install extension",
              href: "https://marketplace.visualstudio.com/items?itemName=JamesHaworthWheatman.vschameleon&ssr=false#overview",
            },
          ]}
        />
        <HighlightDisplayCard
          title="Next-Notion Blog Builder"
          description="CLI to quickly generate a NextJS blog which uses Notion as a CMS to easily store and edit all your articles. Run `npx next-notion-blog-builder`!"
          callToActions={[
            {
              Icon: GitHubIcon,
              text: "View source code",
              href: "https://github.com/JamesDHW/next-notion-blog-builder",
            },
            {
              Icon: NpmIcon,
              text: "View on NPMJS",
              href: "https://www.npmjs.com/package/next-notion-blog-builder",
            },
          ]}
        />
      </div>

      <Link
        className="flex text-lg justify-end hover:text-ice-800"
        href="https://github.com/JamesDHW/"
      >
        More GitHub repos
        <span className="my-auto">
          <ArrowRightIcon width={20} height={20} />
        </span>
      </Link>

      <h3 className="flex flex-row font-bold text-2xl md:text-4xl tracking-tight my-4 text-ice-800 dark:text-white">
        <ArticleIcon className="w-8 md:w-10 h-8 md:h-10 dark:text-ice-800 text-gray-700" />
        &nbsp;Articles and Talks
      </h3>

      <Divider />

      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 pb-4">
        <HighlightDisplayCard
          title="[TechLead Conf] Not Your Everyday Tech Lead: What Does It Mean To Be TL in a Lean Software Company?"
          callToActions={[
            {
              Icon: VideoIcon,
              text: "Watch now...",
              href: "/blog/2024-06-15/tech-lead-conf",
            },
          ]}
        />
        <HighlightDisplayCard
          title="What Even is Tech Quality and Why Should I Care?"
          callToActions={[
            {
              Icon: VideoIcon,
              text: "Watch now...",
              href: "/blog/2023-01-31/what-is-tech-quality",
            },
          ]}
        />
        <HighlightDisplayCard
          title="What Does it Mean to Be a Good Software Engineer?"
          callToActions={[
            {
              Icon: EyeIcon,
              text: "Read more...",
              href: "/blog/2022-12-18/how-to-be-a-good-software-engineer",
            },
          ]}
        />
        <HighlightDisplayCard
          title="Supercharge your Learning with This One Tool for Programmers!"
          callToActions={[
            {
              Icon: EyeIcon,
              text: "Read more...",
              href: "/blog/2023-04-02/development-journal",
            },
          ]}
        />
        <HighlightDisplayCard
          title="Universal Apps: A Single, Unified Codebase Powering iOS, Android, macOS, Windows, and Web"
          callToActions={[
            {
              Icon: EyeIcon,
              text: "Read more...",
              href: "/blog/2023-09-24/universal-application-architecture",
            },
          ]}
        />
        <HighlightDisplayCard
          title="Principles Gathered from Clean Code: A Handbook of Agile Software Craftsmanship"
          callToActions={[
            {
              Icon: EyeIcon,
              text: "Read more...",
              href: "/blog/2022-02-05/principles-from-clean-code",
            },
          ]}
        />
      </div>
      <Link
        className="flex text-lg justify-end hover:text-ice-800"
        href={PATHS.BLOG}
      >
        More articles and talks
        <span className="my-auto">
          <ArrowRightIcon width={20} height={20} />
        </span>
      </Link>

      <h3 className="flex flex-row font-bold text-2xl md:text-4xl tracking-tight my-4 text-ice-800 dark:text-white">
        <BookIcon className="w-8 md:w-10 h-8 md:h-10 dark:text-ice-800 text-gray-700" />
        &nbsp;Are We on the Same Page?
      </h3>

      <Divider />

      <Carousel>
        {MY_READING_LIST.map(({ title, uri }, i) => (
          <BookCover title={title} uri={uri} key={`${title}-${i}`} />
        ))}
      </Carousel>
      <Link
        className="flex text-lg justify-end hover:text-ice-800 mb-4"
        href={PATHS.RESOURCES}
      >
        More resources{" "}
        <span className="my-auto">
          <ArrowRightIcon width={20} height={20} />
        </span>
      </Link>
    </div>
  );
}

function useTranslation() {
  return (s: string) => "";
}
