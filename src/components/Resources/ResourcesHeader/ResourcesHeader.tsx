import { FC } from "react";
import { Caret } from "components/Common/TypewriterEffect/TypewriterEffect";

export const ResourcesHeader: FC = () => {
  return (
    <div className="mb-8">
      <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-5 text-black dark:text-white">
        Resources
        <Caret />
      </h1>
      <p>
        There are a number of learning resources that I really like and would
        highly recommend to others starting out in their careers in Software
        Engineering. I{`'`}ve started keeping track of these to compile a
        repository of good ideas - here{`'`}s the full list so far:
      </p>
    </div>
  );
};
