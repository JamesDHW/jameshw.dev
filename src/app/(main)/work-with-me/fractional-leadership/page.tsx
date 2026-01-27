import { Hero } from "components/WorkWithMe/Hero/Hero";
import {
  MyApproachSection,
  type ApproachStep,
} from "components/WorkWithMe/Sections/MyApproachSection";
import { TestimonialsSection } from "components/WorkWithMe/Sections/TestimonialsSection";
import {
  YourChallengesSection,
  type ChallengeItem,
} from "components/WorkWithMe/Sections/YourChallengesSection";
import type { Testimonial } from "components/WorkWithMe/Testimonials/Testimonials";

const EMAIL_ADDRESS = "JamesHaworthWheatman@gmail.com";
const MAIL_SUBJECT = "Work with me: Fractional Engineering Leadership";

const createMailtoLink = (subject: string) => {
  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}`;
};

const CHALLENGES: ChallengeItem[] = [
  {
    title: "Senior Leadership Gap",
    description:
      "You need experienced technical leadership, but a full-time hire is too slow, too risky, or too expensive right now.",
  },
  {
    title: "Delivery and Quality Instability",
    description:
      "Roadmaps slip, teams thrash, and quality degrades as the system and organisation scale faster than the process supporting them.",
  },
  {
    title: "Hiring and Team Design Uncertainty",
    description:
      "You're unsure who to hire next, how to structure the team, or how to build a culture that ships consistently.",
  },
];

const APPROACH_DESCRIPTION =
  "A fixed-term, part-time leadership engagement to stabilise delivery, improve decision-making, and set a clear technical direction—without long-term lock-in.";

const APPROACH_STEPS: ApproachStep[] = [
  {
    title: "Assess and stabilise",
    description:
      "I quickly identify the highest-leverage constraints (architecture, process, team dynamics) and help you remove bottlenecks to restore momentum.",
  },
  {
    title: "Set direction and operating rhythm",
    description:
      "We establish a practical strategy for the next 6-12 weeks: priorities, architecture guardrails, and an execution cadence the team can sustain.",
  },
  {
    title: "Build capability and plan the handover",
    description: (
      <>
        I coach your leads, support hiring decisions, and leave behind a clear
        plan so the team keeps improving after the engagement ends.
      </>
    ),
  },
];

const TESTIMONIALS: Testimonial[] = [];

type SectionProps = {
  title: string;
  items: string[];
};

const Section = ({ title, items }: SectionProps) => {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default function FractionalLeadershipPage() {
  const mailtoLink = createMailtoLink(MAIL_SUBJECT);

  return (
    <>
      <Hero
        kicker="Fractional Engineering Leadership"
        ctaHref={mailtoLink}
        title={
          <>
            A Senior Technical Partner <br />
            for <span className="text-ice-800">Confident Delivery</span>.
          </>
        }
        description="I stay embedded as a fractional tech lead / CTO — continuously guiding decisions, unblocking delivery, and catching problems early so your product reaches production the right way."
      />

      <div className="flex flex-col px-8 py-10 space-y-12">
        <YourChallengesSection challenges={CHALLENGES} />

        <MyApproachSection description={APPROACH_DESCRIPTION} steps={APPROACH_STEPS} />

        <TestimonialsSection
          testimonials={TESTIMONIALS}
          testimonialsClassName="md:grid-cols-2"
        />

      </div>
    </>
  );
}
