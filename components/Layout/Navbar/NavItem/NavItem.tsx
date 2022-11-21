import { usePathname } from "next/navigation";
import { FC } from "react";
import classes from "classnames";
import Link from "next/link";

export interface NavItemPops {
  href: string;
  label: string;
}

export const NavItem: FC<NavItemPops> = ({ href, label }) => {
  const path = usePathname();
  const isActive = href.split("/")[1] === path.split("/")[1];

  return (
    <li className="flex justify-center">
      <Link
        href={href}
        key={href}
        className={classes(
          {
            "text-gray-800 dark:text-gray-200": isActive,
            "text-gray-400 dark:text-gray-300": !isActive,
          },
          "py-10 sm:py-2 px-3 w-full font-semibold text-3xl sm:text-base rounded-lg hover:dark:bg-gray-800 hover:bg-gray-200 text-gray-900 dark:text-gray-100 transition-all"
        )}
        style={{ transitionDelay: "100ms" }}
      >
        {label}
      </Link>
    </li>
  );
};
