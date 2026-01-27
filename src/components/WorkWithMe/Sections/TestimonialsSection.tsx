import { Testimonials, type Testimonial } from "components/WorkWithMe/Testimonials/Testimonials";

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
  title?: string;
  className?: string;
  testimonialsClassName?: string;
};

export const TestimonialsSection = ({
  testimonials,
  title = "Testimonials",
  className,
  testimonialsClassName,
}: TestimonialsSectionProps) => {
  return (
    <section className={className}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h2>
      <Testimonials testimonials={testimonials} className={testimonialsClassName} />
    </section>
  );
};

