"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useTheme } from "next-themes";
import { NavItem, NavItemPops } from "./NavItem";

const navBarItems: NavItemPops[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About Me",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className="flex width-full pt-8 pb-12 justify-between align-baseline">
      <MobileNav open={isMenuOpen} setOpen={setIsMenuOpen} />
      <button
        className="sm:hidden relative w-10 h-10 z-10 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all text-4xl"
        onClick={() => setIsMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        type="button"
      >
        {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
      </button>

      <ul className="hidden sm:flex sm:flex-row flex-col">
        {navBarItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>

      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-10 h-10 z-10 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5 text-gray-800 dark:text-gray-200"
        >
          {resolvedTheme === "dark" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
      </button>
    </nav>
  );
};

function MenuIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 5.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 10.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 15.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-100 ease-in-out filter bg-gray-50 dark:bg-gray-900 opacity-95 z-10 drop-shadow-md overscroll-contain`}
    >
      <div className="flex flex-col h-full justify-center align-middle">
        {navBarItems.map((item) => (
          <button
            key={item.href}
            onClick={() => setTimeout(() => setOpen((v: boolean) => !v), 500)}
          >
            <NavItem {...item} />
          </button>
        ))}
      </div>
    </div>
  );
}