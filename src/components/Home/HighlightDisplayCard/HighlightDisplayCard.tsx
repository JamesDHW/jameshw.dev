import classes from "classnames";
import Link from "next/link";
import { cloneElement, FC, ReactElement } from "react";

interface BlogPreviewCardProps {
  title: string;
  description?: string;
  gradient: string;
  callToActions: {
    Icon?: FC<{ className?: string }>;
    text?: string;
    href: string;
  }[];
}

export const HighlightDisplayCard: FC<BlogPreviewCardProps> = ({
  title,
  description,
  gradient,
  callToActions = [],
}) => {
  // controls wrapping _either_ the whole card _or_ individual CTAs because <a> tags cannot be nested due to hydration errors
  const isSingularCallToAction = callToActions.length === 1;

  return (
    <ConditionallyWrap
      Component={
        <Link
          href={callToActions[0]!.href}
          className="flex flex-grow transform transition-all hover:scale-[1.01]"
          target={callToActions[0]!.href.startsWith("http") ? "_blank" : ""}
        />
      }
      wrapIf={isSingularCallToAction}
    >
      <div
        className={classes("rounded-xl w-full bg-gradient-to-r p-1", gradient)}
      >
        <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-lg font-bold w-full text-gray-900 dark:text-gray-100">
              {title}
            </h4>
          </div>
          <p className="text-gray-800 dark:text-gray-200 mb-2 sm:mb-4">
            {description}
          </p>
          {callToActions.map(({ Icon, text, href }) => (
            <ConditionallyWrap
              key={href}
              wrapIf={!isSingularCallToAction}
              Component={
                <Link
                  className="flex text-gray-800 dark:text-gray-200 my-1 transform transition-all hover:scale-[1.01]"
                  href={href}
                  target={
                    callToActions[0]!.href.startsWith("http") ? "_blank" : ""
                  }
                />
              }
            >
              <>
                {Icon && <Icon className="h-6 w-6 mr-2" />}
                <div className="flex text-right text-gray-800 dark:text-gray-200">
                  <p className="w-full underline">{text}</p>
                </div>
              </>
            </ConditionallyWrap>
          ))}
        </div>
      </div>
    </ConditionallyWrap>
  );
};

const ConditionallyWrap: FC<{
  wrapIf: boolean;
  Component: ReactElement;
  children: ReactElement;
}> = ({ wrapIf, Component, children }) =>
  wrapIf ? cloneElement(Component, {}, children) : children;
