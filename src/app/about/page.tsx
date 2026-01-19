import { PageTitle } from "components/Common/PageTitle/PageTitle";
import Image from "next/image";
import dog from "../../../public/charlie.png";
import windemere from "../../../public/windemere.jpeg";
import river from "../../../public/river.jpeg";
import athens from "../../../public/athens.jpeg";

const images = [athens, river, windemere, dog];

export default function About() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const selectedImage = images[dayOfYear % images.length]!;

  return (
    <div className="flex flex-col px-8">
      <PageTitle>
        Hey! I{`'`}m James
        <span className="inline-block ml-2 animate-waving-hand">👋</span>
      </PageTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-100 ltr justify-center flex-wrap">
        <div className="flex flex-col justify-evenly align-middle text-xl">
          <p className="py-2">I{`'`}m a London-based Software Engineer!</p>
          <p className="py-2">
            I read <span className="font-semibold">Physics</span> and{" "}
            <span className="font-semibold">Computer Science</span> at The
            University of Sheffield and University College London.
          </p>
          <p className="py-2">
            Currently, I{`'`}m working as a{" "}
            <span className="font-semibold">
              Engineering Manager/ Tech Lead
            </span>{" "}
            on full-stack web and mobile applications at{" "}
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
            src={selectedImage}
            alt="Me stood in front of Windemere in the Lake District"
            placeholder="blur"
            fill
          />
        </div>
      </div>
    </div>
  );
}
