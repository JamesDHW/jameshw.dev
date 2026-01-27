export type ChallengeItem = {
  title: string;
  description: string;
};

type YourChallengesSectionProps = {
  challenges: ChallengeItem[];
  title?: string;
  className?: string;
};

export const YourChallengesSection = ({
  challenges,
  title = "Your Challenges",
  className,
}: YourChallengesSectionProps) => {
  return (
    <section className={className}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h2>
      <div className="grid gap-3 md:grid-cols-3">
        {challenges.map(({ title: challengeTitle, description }) => {
          return (
            <div
              key={challengeTitle}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4 space-y-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {challengeTitle}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

