import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl md:text-4xl mb-5 text-black dark:text-white">
        Hey there! I&apos;m James
        <span className="inline-block ml-2 animate-waving-hand">👋</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-100 justify-center flex-wrap">
        <div className="relative w-72 h-96 overflow-hidden rounded-lg m-5 hover:scale-[1.05] transition-all hover:shadow-xl">
          <Image
            className="object-cover"
            src="/windemere.jpeg"
            alt="Me crossing a river"
            fill
          />
        </div>
        <div className="flex flex-col justify-evenly align-middle text-xl">
          <p>I&apos;m a software engineer living in London!</p>
          <p>
            Currently, I&apos;m working as an{" "}
            <span className="font-semibold">Architect Developer</span> on
            full-stack web and mobile applications at{" "}
            <a href="https://theodo.co.uk" className="font-semibold underline">
              Theodo
            </a>
            .
          </p>
          <p>Fun fact: everyone in my family has a black-belt in Taekwondo</p>
        </div>
      </div>
    </div>
  );
}
