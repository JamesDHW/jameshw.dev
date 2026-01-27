import classNames from "classnames";
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

const CONTROL_SPECTRUM_ITEMS = [
  { label: "Disciplining", isOffered: false },
  { label: "Instructing", isOffered: false },
  { label: "Directing", isOffered: false },
  { label: "Training", isOffered: true },
  { label: "Teaching", isOffered: false },
  { label: "Advising", isOffered: true },
  { label: "Mentoring", isOffered: true },
  { label: "Facilitating", isOffered: false },
  { label: "Coaching", isOffered: true },
  { label: "Counselling", isOffered: false },
] as const;

export const ControlSpectrumInfographic = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Support Spectrum
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-2">
        A quick mental model: as you move down the list, control shifts from the supporter to
        the individual.
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-6">
        I offer <span className="font-bold">Training</span>, <span className="font-bold">Advising</span>, <span className="font-bold">Mentoring</span>, and <span className="font-bold">Coaching</span>.
      </p>

      <div className="max-w-2xl ml-4">
        <div className="grid grid-cols-[16px_1fr] gap-x-4">
          <div className="col-span-2 mb-4">
            <div className="inline-flex w-fit rounded-full bg-gray-200 dark:bg-gray-700 px-4 py-2 text-base font-bold text-gray-900 dark:text-gray-100 ring-1 ring-gray-200 dark:ring-gray-700">
              Supporter in Control
            </div>
          </div>

          <div className="flex ml-2 items-stretch justify-start">
            <div className=" w-1 rounded-full bg-gray-200 dark:bg-gray-700" />
          </div>
          <ol className="space-y-3">
            {CONTROL_SPECTRUM_ITEMS.map(({ label, isOffered }) => {
              return (
                <li
                  key={label}
                  className={classNames("text-base sm:text-lg text-gray-900 dark:text-gray-100", { "text-ice-600 font-bold": isOffered })}
                >
                  {label}
                </li>
              );
            })}
          </ol>

          <div className="col-span-2 mt-4">
            <div className="inline-flex w-fit rounded-full bg-gray-200 dark:bg-gray-700 px-4 py-2 text-base font-bold text-gray-900 dark:text-gray-100 ring-1 ring-gray-200 dark:ring-gray-700">
              Individual in Control
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EMAIL_ADDRESS = "JamesHaworthWheatman@gmail.com";
const MAIL_SUBJECT = "Work with me: Ongoing Support and Coaching";

const createMailtoLink = (subject: string) => {
  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}`;
};

const CHALLENGES: ChallengeItem[] = [
  {
    title: "Planning With Uncertainty",
    description:
      'You\'re making decisions without perfect information and want a way to move forward confidently despite ambiguity.',
  },
  {
    title: "No Second Opinion",
    description:
      "Founders and early CTOs often carry the uncertainty alone–without consistent, experienced input to keep direction clear and stress low.",
  },
  {
    title: "Maintaining Direction",
    description:
      "Plans make sense in the moment, but without regular reflection and accountability, momentum can drift.",
  },
];

const APPROACH_DESCRIPTION =
  "Ongoing support that strengthens decision-making, builds clarity, and turns uncertainty into intentional action.";

const APPROACH_STEPS: ApproachStep[] = [
  {
    title: "Clarify what matters",
    description:
      "We start by building a map of your goals and constraints.",
  },
  {
    title: "Identify the type of support you need",
    description:
      "Each individual has different needs to reach their goals–coaching, mentoring, advising, training, or a combination of each.",
  },
  {
    title: "Plan, execute, and review",
    description:
      "We create a plan for regular support based on your needs and goals, and review progress regularly.",
  },
];

const TESTIMONIALS: Testimonial[] = [];

export default function CoachingPage() {
  const mailtoLink = createMailtoLink(MAIL_SUBJECT);

  return (
    <>
      <Hero
        kicker="Ongoing Support and Coaching"
        ctaHref={mailtoLink}
        title={
          <>
            Senior Insight That Guides Clarity, Direction, and{" "}
            <span className="text-ice-800">Intentional Action</span>.
          </>
        }
        description="I've been supporting Developers and Tech Leads for over 4 years on a weekly basis, helping them to clarify their goals, build self-awareness, and create meaningful, actionable plans."
      />

      <div className="space-y-8">
        <YourChallengesSection challenges={CHALLENGES} />

        <MyApproachSection description={APPROACH_DESCRIPTION} steps={APPROACH_STEPS} />

        <ControlSpectrumInfographic />

        <TestimonialsSection
          testimonials={TESTIMONIALS}
          testimonialsClassName="md:grid-cols-2"
        />
      </div>
    </>
  );
}
