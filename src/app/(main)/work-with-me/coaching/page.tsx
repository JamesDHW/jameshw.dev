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
const MAIL_SUBJECT = "Work with me: Ongoing Technical Coaching";

const createMailtoLink = (subject: string) => {
  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}`;
};

const CHALLENGES: ChallengeItem[] = [
  {
    title: "Decisions Without Confidence",
    description:
      'Architecture, hiring, and roadmap choices can feel like a guess when there isn’t a senior sounding board to pressure-test the trade-offs.',
  },
  {
    title: "Lonely Leadership",
    description:
      "Founders and early CTOs often carry the uncertainty alone—without consistent, experienced input to keep direction clear and stress low.",
  },
  {
    title: "Execution Drift",
    description:
      "Important work gets crowded out by urgent work. Priorities blur, technical debt grows, and momentum stalls.",
  },
];

const APPROACH_DESCRIPTION =
  "Ongoing coaching that strengthens decision-making, builds clarity, and turns uncertainty into intentional action—without adding full-time overhead.";

const APPROACH_STEPS: ApproachStep[] = [
  {
    title: "Clarify what matters now",
    description:
      "We start by getting crisp on your goals, constraints, and what \"good\" looks like in the next 2-8 weeks.",
  },
  {
    title: "Pressure-test options and trade-offs",
    description:
      "I help you reason through architecture, hiring, and delivery decisions so you can move forward with fewer unknowns and fewer regrets.",
  },
  {
    title: "Turn decisions into action",
    description: (
      <>
        We convert decisions into a practical plan (usually 2-4 hours every 2
        weeks), with async support between sessions.
      </>
    ),
  },
];

const TESTIMONIALS: Testimonial[] = [];

export default function CoachingPage() {
  const mailtoLink = createMailtoLink(MAIL_SUBJECT);

  return (
    <>
      <Hero
        kicker="Ongoing Technical Coaching"
        ctaHref={mailtoLink}
        title={
          <>
            Senior Insight Guiding Clarity, Direction, and{" "}
            <span className="text-ice-800">Intentional Action</span>.
          </>
        }
        description="I've been coaching Developers and Tech Leads for over 4 years on a weekly basis, helping them to clarify their goals, build self-awareness, and create actionable plans to work meaningfully towards them."
      />

      <div className="space-y-8">
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
