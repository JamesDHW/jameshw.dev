import type { ReactNode } from "react";

export type ApproachStep = {
  title: string;
  description: ReactNode;
};

type MyApproachSectionProps = {
  description: ReactNode;
  steps: ApproachStep[];
  title?: string;
  className?: string;
};

export const MyApproachSection = ({
  description,
  steps,
  title = "My Approach",
  className,
}: MyApproachSectionProps) => {
  return (
    <section className={className}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-6">
        {description}
      </p>
      <ol className="space-y-4">
        {steps.map(({ title: stepTitle, description: stepDescription }, index) => {
          const stepNumber = index + 1;

          return (
            <li
              key={stepTitle}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white ring-1 ring-gray-900/10 dark:bg-gray-100 dark:text-gray-900 dark:ring-gray-100/10">
                  {stepNumber}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                    {stepTitle}
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {stepDescription}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

