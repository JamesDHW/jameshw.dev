export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  organisation?: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
  className?: string;
};

export const Testimonials = ({ testimonials, className }: TestimonialsProps) => {
  const containerClassName = ["grid gap-8", className].filter(Boolean).join(" ");

  if (testimonials.length === 0) {
    return (
      <div className={containerClassName}>
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-2 -top-3 text-6xl font-serif leading-none text-gray-200 dark:text-gray-700"
          >
            “
          </span>
          <p className="text-base italic text-gray-700 dark:text-gray-300 leading-relaxed">
            References available on request.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      {testimonials.map(({ quote, author, role, organisation }) => {
        const meta = [role, organisation].filter(Boolean).join(" · ");

        return (
          <figure
            key={`${author}-${quote}`}
            className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-2 -top-3 text-6xl font-serif leading-none text-gray-200 dark:text-gray-700"
            >
              “
            </span>
            <blockquote className="text-base italic text-gray-700 dark:text-gray-300 leading-relaxed">
              {quote}
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
              {author}
              {meta ? (
                <span className="block text-xs font-normal text-gray-600 dark:text-gray-400">
                  {meta}
                </span>
              ) : null}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
};

