import CLEAN_ARCHITECTURE from "images/books/clean-architecture";
import SOFTWARE_CRAFTSMAN from "images/books/software-craftsman";
import CLEAN_CODE from "images/books/clean-code";
import REFACTORING from "images/books/refactoring";
import FIVE_DYSFUNCTIONS from "images/books/five-dysfunctions";
import GETTING_TO_YES from "images/books/getting-to-yes";
import DOING_GOOD_BETTER from "images/books/doing-good-better";
import TOYOTA_TALENT from "images/books/toyota-talent";
import LEAN_STARTUP from "images/books/lean-startup";

import { NavItemPops } from "components/Layout/Navbar/NavItem/NavItem";

export const MY_READING_LIST = [
  {
    title: "Clean Architecture",
    uri: CLEAN_ARCHITECTURE,
  },
  {
    title: "The Software Craftsman",
    uri: SOFTWARE_CRAFTSMAN,
  },
  {
    title: "Clean Code",
    uri: CLEAN_CODE,
  },
  {
    title: "Refactoring",
    uri: REFACTORING,
  },
  {
    title: "The Five Dysfunctions of a Team",
    uri: FIVE_DYSFUNCTIONS,
  },
  {
    title: "Getting to Yes",
    uri: GETTING_TO_YES,
  },
  {
    title: "Doing Good Better",
    uri: DOING_GOOD_BETTER,
  },
  {
    title: "Toyota Talent: Developing Your People The Toyota Way",
    uri: TOYOTA_TALENT,
  },
  {
    title: "The Lean Startup",
    uri: LEAN_STARTUP,
  },
];

export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  BLOG: "/blog",
  JOURNAL: "/journal",
  GIVING: "/giving",
  TECH: "/tech",
  RESOURCES: "/resources",
};

export const DOMAIN = "https://www.jameshw.dev";

export const NAVBAR_ITEMS: NavItemPops[] = [
  {
    href: PATHS.HOME,
    label: "Home",
  },
  {
    href: PATHS.ABOUT,
    label: "About Me",
  },
  {
    href: PATHS.BLOG,
    label: "Blog",
  },
  {
    href: PATHS.JOURNAL,
    label: "Dev Journal",
  },
  {
    href: PATHS.RESOURCES,
    label: "Resources",
  },
];
