import { Hero } from "components/WorkWithMe/Hero/Hero";
import {
  MyApproachSection,
  type ApproachStep,
} from "components/WorkWithMe/Sections/MyApproachSection";
import {
  YourChallengesSection,
  type ChallengeItem,
} from "components/WorkWithMe/Sections/YourChallengesSection";
import { TestimonialsSection } from "components/WorkWithMe/Sections/TestimonialsSection";
import type { Testimonial } from "components/WorkWithMe/Testimonials/Testimonials";

const EMAIL_ADDRESS = "JamesHaworthWheatman@gmail.com";
const MAIL_SUBJECT = "Work with me: Technical Direction & Risk Review";

const createMailtoLink = (subject: string) => {
  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}`;
};

const topSection = {
  fit: [
    "A Seed / Series A startup building or scaling a core software product",
    "A non-technical founder or a stretched CTO who needs a senior technical sounding board",
    "A team that feels uncertain—\"we might be building the wrong thing, or building it the wrong way\"—and wants clarity before committing further time and money",
  ],
  notFit: "Teams needing full-time execution or ongoing delivery support",
  contact: {
    timeframe: "1-2 weeks",
    touchpoints: [
      "2-3 calls total",
      "Async Q&A throughout",
      "Optional pairing sessions for high-impact decisions",
    ],
  },
  deliverables: [
    "A written risk review: architecture, delivery constraints, and key failure modes",
    "A prioritised set of recommendations with trade-offs and sequencing",
    "A short-term execution plan (next 2-6 weeks) aligned to current goals",
  ],
  outcomes: [
    "Clear priorities and risk assessment",
    "De-risked architecture decisions",
    "Aligned next steps for your team",
  ],
};

const CHALLENGES: ChallengeItem[] = [
  {
    title: "High-Stakes; No Safety Net",
    description:
      "You're responsible for key technical decisions but it's difficult to know if you're building good quality.",
  },
  {
    title: "Scaling Pains",
    description:
      "As your platform grows, your systems reveals its limitations, creating bottlenecks, technical debt, and surprises that slow your roadmap.",
  },
  {
    title: "Teams that Click",
    description:
      "It's hard to align engineers, build trust, and hire the right people; poor collaboration or misaligned priorities can silently sabotage delivery.",
  },
];

const APPROACH_DESCRIPTION =
  "A short, focused engagement to identify technical risks, improve decision quality, and clarify next steps—without adding full-time execution overhead.";

const APPROACH_STEPS: ApproachStep[] = [
  {
    title: "Diagnose the real risks",
    description:
      "I map architecture + delivery constraints to likely failure modes, so you know what can break and why before it costs you.",
  },
  {
    title: "Turn ambiguity into a plan",
    description:
      "You get prioritised recommendations with trade-offs and sequencing, plus a practical 2-6 week plan aligned to your current goals.",
  },
  {
    title: "Lightweight contact time",
    description: (
      <>
        Typically {topSection.contact.timeframe} with 2-3 calls and async Q&amp;A.
        Optional pairing sessions for the highest-impact decisions.
      </>
    ),
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "James quickly found the real constraints in our delivery system and gave us a clear, low-drama plan to de-risk the next quarter. The recommendations were practical and immediately actionable.",
    author: "Example Client",
    role: "Founder",
    organisation: "Early-stage SaaS",
  },
];

export default function RiskReviewPage() {
  const mailtoLink = createMailtoLink(MAIL_SUBJECT);

  return (
    <>
      <Hero
        kicker="Technical Direction & Risk Review"
        ctaHref={mailtoLink}
        title={
          <>
            Production-Tested Strategies <br /> You Can
            <span className="text-ice-800"> Deploy With Confidence</span>.
          </>
        }
        description="I've shipped production software for many industry-leading organisations — now I help early-stage teams build the right product, reduce risk, and deliver value with confidence."
      />

      <div className="flex flex-col px-8 py-10 space-y-12">
        <YourChallengesSection challenges={CHALLENGES} />

        <MyApproachSection description={APPROACH_DESCRIPTION} steps={APPROACH_STEPS} />

        <TestimonialsSection
          testimonials={TESTIMONIALS}
          testimonialsClassName="md:grid-cols-2"
        />

        {/* <hr className="my-6 border-gray-200 dark:border-gray-700" /> */}

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Case Study: Scaling Internal IT Infrastructure Platform
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            While I can't share specifics, I can provide a redacted version of a previous engagement.
          </p>

          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Context
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                A quickly scaling SME (~30 employees, ~100s of customers) approached me to scale their internal IT infrastructure. From a traditional background, without expertise in software engineering, they were negotiating with Salesforce about building a custom CRM solution.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                They were concerned about the cost quoted by Salesforce, and the potential for Salesforce to lock them in to their platform long-term and wanted to explore alternative approaches.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                What I did
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>Reviewed their product roadmap to confirm that Salesforce was too generic for their needs</li>
                <li>Identified the main technical risks and complexities required for their solution</li>
                <li>Built a PoC to demo the solution to their board, including the ability to version and revert records, which was both a key technical risk and an auditability requirement</li>
                <li>Estimated the cost of delivering on their roadmap, which lined up with independent estimates</li>
                <li>Provided a detailed written report with recommendations on the technologies that could meet their needs at the lowest cost</li>
              </ul>
              <div className="pt-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Outcome
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Ultimately, they decided not to go with Salesforce, but instead to build a custom solution in-house.
                </p>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
