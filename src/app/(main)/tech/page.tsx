import { PageTitle } from "components/Common/PageTitle/PageTitle";
import { TechListDisplay } from "components/Tech/TechListDisplay/TechListDisplay";
import { TECHNOLOGIES } from "./constants";

export default function Tech() {
  return (
    <div className="flex flex-col px-8">
      <PageTitle>Tech</PageTitle>
      <p className="py-2 text-lg">
        I don{`'`}t believe the worth of a Software Engineer is defined by the
        specific tools they know (a bad craftsman blames his tools!).
      </p>
      <p className="py-2 text-lg">
        That being said, it{`'`}s all about choosing the right tool for the job–I
        try to work with tech that delivers the most value as quickly as
        possible.
      </p>
      <p className="py-2 text-lg">
        Here{`'`}s some of the tech I{`'`}ve used. I{`'`}
        ve highlighted those which I{`'`}ve used to{" "}
        <span className="font-bold underline">
          deploy production code professionally
        </span>
        .
      </p>
      <div className="grid sm:grid-cols-2 sm:gap-10 gap-8 my-8">
        <div>
          <h2 className="text-2xl font-bold">Web Frontend</h2>
          <TechListDisplay list={TECHNOLOGIES.WEB} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Mobile Frontend</h2>
          <TechListDisplay list={TECHNOLOGIES.MOBILE} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Backend</h2>
          <TechListDisplay list={TECHNOLOGIES.BACKEND} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Databases</h2>
          <TechListDisplay list={TECHNOLOGIES.DATABASES} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Infrastructure</h2>
          <TechListDisplay list={TECHNOLOGIES.INFRASTRUCTURE} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Languages</h2>
          <TechListDisplay list={TECHNOLOGIES.LANGUAGES} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Development</h2>
          <TechListDisplay list={TECHNOLOGIES.DEVELOPMENT} />
        </div>
      </div>
    </div>
  );
}
