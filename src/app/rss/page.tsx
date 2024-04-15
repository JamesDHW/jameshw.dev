import Link from "next/link";
import { PageTitle } from "components/Common/PageTitle/PageTitle";
import { PATHS } from "app/constants";

export default function Giving() {
  return (
    <div className="flex flex-col px-8">
      <PageTitle>RSS</PageTitle>
      <p className="py-2 text-lg">
        I have an{" "}
        <Link
          className="font-semibold underline"
          href="https://en.wikipedia.org/wiki/RSS"
          target="_blank"
          rel="noreferrer"
        >
          RSS
        </Link>{" "}
        feed! You can subscribe to this feed to hear all the latest updates from
        me in your own aggregator.
      </p>
      <p className="py-2 text-lg">
        I have three feeds you can subscribe to - you can subscribe to all of
        them{" "}
        <Link className="font-semibold underline" href={PATHS.RSS_MAIN}>
          here
        </Link>
        !
      </p>
      <p className="py-2 text-lg">
        If you want to pick and choose, you can subscribe to them individually:
      </p>
      <p className="py-2 text-lg">
        <ul className="list-disc">
          <li>
            <Link className="font-semibold underline" href={PATHS.RSS_BLOG}>
              Blog:
            </Link>{" "}
            I use my blog to help me think and learn. These posts are typically
            longer and can be about anything, from a specific technology to
            leadership in tech.
          </li>
          <li>
            <Link className="font-semibold underline" href={PATHS.RSS_JOURNAL}>
              Development Journal:
            </Link>{" "}
            A development journal is a log of specific problems you encounter in
            your daily work while programming. You experience a problem - any
            unfamiliar technical situation - and log how you dealt with it.{" "}
            <Link
              className="font-semibold underline"
              href="https://www.jameshw.dev/blog/2023-04-02/development-journal"
            >
              Read more...
            </Link>{" "}
          </li>
          <li>
            <Link
              className="font-semibold underline"
              href={PATHS.RSS_RESOURCES}
            >
              Resources:
            </Link>{" "}
            A collection of articles and resources I{"'"}ve been reading during
            my day. These are things I anticipate wanting to find again myself
            in the future or share with others. Think of this as me aggregating
            and passing on resources I think are cool!
          </li>
        </ul>
      </p>
    </div>
  );
}
