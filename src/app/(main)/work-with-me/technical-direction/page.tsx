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
import { ArrowRightIcon } from "icons/arrow-right";
import { FC } from "react";
import Link from "next/link";

type CaseStudyCta = {
  href: string;
  label: string;
};

type CaseStudyCardProps = {
  title: string;
  summary: string;
  outcomes: string[];
  conclusion: string;
  ctas?: CaseStudyCta[];
};

export const CaseStudyCard: FC<CaseStudyCardProps> = ({
  title,
  summary,
  outcomes,
  conclusion,
  ctas = [],
}) => {
  const hasCtas = ctas.length > 0;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-6 shadow-sm">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{summary}</p>
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Outcomes
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-400">
          {outcomes.map((outcome) => {
            return <li key={`${title}-${outcome}`}>{outcome}</li>;
          })}
        </ul>
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Conclusion
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{conclusion}</p>

      </div>
      {hasCtas ? (
        <ul className="mt-auto flex items-center justify-end gap-3 overflow-x-auto pt-5">
          {ctas.map(({ href, label }) => {
            return (
              <li key={`${title}-${href}-${label}`} className="shrink-0">
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-gray-900 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 ring-1 ring-gray-200 dark:ring-gray-700 transition-all hover:-translate-y-0.5 hover:ring-gray-300 dark:hover:ring-gray-600"
                >
                  {label} <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

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
    "A short-term execution plan aligned to current goals",
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
      "As your platform grows, your systems reveals the bottlenecks that slow your roadmap.",
  },
  {
    title: "Curating Teams That Click",
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
      "You get prioritised recommendations with trade-offs and sequencing, plus a practical plan aligned to your current goals.",
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

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Case Studies
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <CaseStudyCard
              title="Build vs Buy: Internal CRM Decision"
              summary="A scaling SME needed clarity on whether Salesforce could meet their roadmap without long-term lock-in."
              outcomes={[
                "Board-ready PoC demonstrating audit-friendly record versioning and rollback.",
                "Clear report on the technical risk profile and delivery constraints for the roadmap.",
                "Build cost estimate independently validated.",
              ]}
              conclusion="The report provided the clarity needed to make a decision and move forward with the build in-house."
              ctas={[
                { label: "Read the report", href: "/salesforce-strategic-review.pdf" },
              ]}
            />
            <CaseStudyCard
              title="Universal Strategy Validation"
              summary="Validated the strategy for a universal app offering across multiple platforms."
              outcomes={[
                "PoC demonstrating capabilities and limitations of the Universal App architecture.",
                "Whitepaper summarising the pros, cons, and trade-offs of the architecture.",
                "Article and talk at React Native London at Amazon HQ to drive adoption of the architecture.",
              ]}
              conclusion="Multiple projects which saved clients thousands of pounds in development costs."
              ctas={[
                { label: "Whitepaper", href: "/universal-app-architecture.pdf" },
                { label: "Article", href: "https://www.reactnativetv.com/blog/universal-apps-powering-seven-platforms" },
              ]}
            />
            <CaseStudyCard
              title="Vulnerability Mitigation Strategy"
              summary="A banking platform built on a legacy technology stack with critical vulnerabilities needed a mitigation plan."
              outcomes={[
                "Vulnerability assessment of the technology stack and affected dependencies.",
                "Validated a migration path to a new technology stack with minimal cost.",
              ]}
              conclusion="The client saved multiple millions of pounds in rebuild costs as the mitigation plan allows them to continue using the existing platform securely."
              ctas={[]}
            />
            <CaseStudyCard
              title="Lean Startup Product Strategy"
              summary="A startup needed a tech strategy to validate their product-market fit while keeping costs low without hiring a full-time CTO."
              outcomes={[
                "With the founder, identified the biggest product opportunities within their constraints.",
                "Built an MVP of the WhatsApp service that couldn't be built with off-the-shelf tools. ",
              ]}
              conclusion="The MVP allowed the founder to build out the product which supported their first hundreds of users."
              ctas={[]}
            />
          </div>
        </section>

        <TestimonialsSection
          testimonials={TESTIMONIALS}
          testimonialsClassName="md:grid-cols-2"
        />
      </div>
    </>
  );
}
