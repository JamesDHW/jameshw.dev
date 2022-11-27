import classNames from "classnames";
import { FC, ReactNode } from "react";

export interface ChipProps {
  children: ReactNode;
  className?: string;
}

export const Chip: FC<ChipProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "py-1 px-3 text-sm w-fit rounded-2xl border-2 bg-opacity-20 text-gray-500 dark:text-gray-300",
        "border-gray-300 bg-gray-200 dark:border-gray-600 dark:bg-gray-800",
        className
      )}
    >
      {children}
    </div>
  );
};
