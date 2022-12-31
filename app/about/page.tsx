import Image from "next/image";
import windemere from "/public/windemere.jpeg";

export default function About() {
  return (
    <div className="flex flex-col px-8">
      <h1 className="font-bold text-3xl md:text-4xl mb-5 text-black dark:text-white">
        Hey! I{`'`}m James
        <span className="inline-block ml-2 animate-waving-hand">👋</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-100 ltr justify-center flex-wrap">
        <div className="flex flex-col justify-evenly align-middle text-xl">
          <p className="py-2">I{`'`}m a software engineer living in London!</p>
          <p className="py-2">
            Currently, I{`'`}m working as an{" "}
            <span className="font-semibold">Architect Developer</span> on
            full-stack web and mobile applications at{" "}
            <a
              href="https://www.theodo.co.uk"
              className="font-semibold underline"
            >
              Theodo UK
            </a>
            .
          </p>
          <p className="py-2">
            <span className="font-semibold">Fun Fact:</span> everyone in my
            family has a black-belt in Taekwondo.
          </p>
        </div>
        <div className="relative sm:order-none order-first w-100 sm:w-72 h-96 overflow-hidden rounded-lg m-5 hover:scale-[1.02] transition-all hover:shadow-xl">
          <Image
            className="object-cover transition-all"
            src={windemere}
            alt="Me stood in front of Windemere in the Lake District"
            placeholder="blur"
            fill
          />
        </div>
      </div>
    </div>
  );
}
