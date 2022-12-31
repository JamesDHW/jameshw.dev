import Link from "next/link";
import { Carousel } from "components/General/Carousel";
import { CharityDisplayItem } from "components/Giving/CharityDisplayItem";
import { MY_DONATIONS } from "app/constants";

export default function Giving() {
  return (
    <div className="flex flex-col px-8">
      <h1 className="font-bold text-3xl md:text-4xl mb-5 text-black dark:text-white">
        Giving What We Can
      </h1>
      <p className="py-2 text-lg">
        I&apos;ve been enthusiastic about{" "}
        <Link
          className="font-semibold"
          href="https://www.effectivealtruism.org/"
          target="_blank"
          rel="noreferrer"
        >
          Effective Altruism
        </Link>{" "}
        since learning about it in 2017.
      </p>
      <p className="py-2 text-lg">
        In late 2019, I started making monthly donations to various {`"`}
        effective{`"`} charities through{" "}
        <Link
          className="font-semibold"
          href="https://www.givingwhatwecan.org/"
          target="_blank"
          rel="noreferrer"
        >
          Giving What We Can
        </Link>
        . This organisation helps people donate to the charities which do the{" "}
        <span className="italic">most</span> good with their donations by
        focusing on high-impact, cost-effective, highly-neglected interventions.
      </p>
      <p className="py-2 text-lg">
        Giving What We Can encourage us to donate publicly so that giving to
        charity becomes the norm. To that end, I&apos;ve listed my pick of
        charities here:
      </p>
      <Carousel>
        {MY_DONATIONS.map(({ logoUri, subHeading }, i) => (
          <CharityDisplayItem
            key={i}
            imageUri={logoUri}
            subHeading={subHeading}
          />
        ))}
      </Carousel>
    </div>
  );
}
