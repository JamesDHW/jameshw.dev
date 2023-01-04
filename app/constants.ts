import { FC } from "react";
import CLEAN_ARCHITECTURE from "images/books/clean-architecture";
import SOFTWARE_CRAFTSMAN from "images/books/software-craftsman";
import CLEAN_CODE from "images/books/clean-code";
import REFACTORING from "images/books/refactoring";
import FIVE_DYSFUNCTIONS from "images/books/five-dysfunctions";
import GETTING_TO_YES from "images/books/getting-to-yes";
import DOING_GOOD_BETTER from "images/books/doing-good-better";
import LEAN_STARTUP from "images/books/lean-startup";

import AGAINST_MALARIA from "images/charities/against-malaria-foundation";
import GIVE_DIRECTLY from "images/charities/give-directly";
import GOOD_FOOD_INSTITUTE from "images/charities/good-food-institute";
import GIVE_WELL from "images/charities/give-well";
import DEWORM_THE_WORLD from "images/charities/deworm-the-world";
import NEW_INCENTIVES from "images/charities/new-incentives";
import SUVITA from "images/charities/suvita";
import SANKU from "images/charities/sanku";
import DISPENSERS_FOR_SAFE_WATER from "images/charities/dispensers-for-safe-water";
import CHARITY_ENTREPRENEURSHIP from "images/charities/charity-entrepreneurship";

import { TypeScriptIcon } from "icons/technologies/languages/typescript";
import { PythonIcon } from "icons/technologies/languages/python";
import { JavaIcon } from "icons/technologies/languages/java";

import { DockerIcon } from "icons/technologies/infrastructure/docker";
import { GitIcon } from "icons/technologies/infrastructure/git";
import { GitHubIcon } from "icons/technologies/infrastructure/github";
import { AwsIcon } from "icons/technologies/infrastructure/aws";
import { Ec2Icon } from "icons/technologies/infrastructure/ec2";
import { TerraformIcon } from "icons/technologies/infrastructure/terraform";

import { NextJsIcon } from "icons/technologies/web-frontend/next-js";
import { GatsbyIcon } from "icons/technologies/web-frontend/gatsby";
import { SveltekitIcon } from "icons/technologies/web-frontend/sveltekit";

import { ReactNativeIcon } from "icons/technologies/mobile/react-native";
import { ExpoIcon } from "icons/technologies/mobile/expo";
import { IonicIcon } from "icons/technologies/mobile/ionic";
import { CapacitorIcon } from "icons/technologies/mobile/capacitor";
import { AndroidIcon } from "icons/technologies/mobile/android";

import { DjangoIcon } from "icons/technologies/web-backend/django";
import { NestJsIcon } from "icons/technologies/web-backend/nest";
import { FirebaseIcon } from "icons/technologies/web-backend/firebase";
import { ServerlessIcon } from "icons/technologies/web-backend/serverless";

import { DynamoDbIcon } from "icons/technologies/database/dynamo";
import { MongoDbIcon } from "icons/technologies/database/mongo";
import { PostgresIcon } from "icons/technologies/database/postgres";

import { VsCodeIcon } from "icons/technologies/development/vscode";
import { AppleIcon } from "icons/technologies/development/apple";

import { BookIcon } from "icons/book";
import { VideoIcon } from "icons/video";
import { FilmIcon } from "icons/film";
import { ArticleIcon } from "icons/article";

import { NavItemPops } from "components/Layout/Navbar/NavItem";

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
    title: "The Lean Startup",
    uri: LEAN_STARTUP,
  },
];

export const MY_DONATIONS = [
  {
    logoUri: AGAINST_MALARIA,
    name: "Against Malaria Foundation",
    donation: "15%",
    siteUrl: "https://www.againstmalaria.com/",
  },
  {
    logoUri: GIVE_DIRECTLY,
    name: "Give Directly",
    donation: "15%",
    siteUrl: "https://www.givedirectly.org/",
  },
  {
    logoUri: GIVE_WELL,
    name: "GiveWell (Top Charities Fund)",
    donation: "10%",
    siteUrl: "https://www.givewell.org/",
  },
  {
    logoUri: DEWORM_THE_WORLD,
    name: "Evidence Action (Deworm the World Initiative)",
    donation: "10%",
    siteUrl: "https://www.evidenceaction.org/dewormtheworld/",
  },
  {
    logoUri: NEW_INCENTIVES,
    name: "New Incentives",
    donation: "10%",
    siteUrl: "https://www.newincentives.org/",
  },
  {
    logoUri: SUVITA,
    name: "Suvita",
    donation: "10%",
    siteUrl: "https://www.suvita.org/",
  },
  {
    logoUri: SANKU,
    name: "Sanku (Project Healthy Children)",
    donation: "10%",
    siteUrl: "https://projecthealthychildren.org/",
  },
  {
    logoUri: GOOD_FOOD_INSTITUTE,
    name: "Good Food Institute",
    donation: "10%",
    siteUrl: "https://gfi.org/",
  },
  {
    logoUri: DISPENSERS_FOR_SAFE_WATER,
    name: "Evidence Action (Dispensers for Safe Water)",
    donation: "5%",
    siteUrl: "https://www.evidenceaction.org/dispensersforsafewater/",
  },
  {
    logoUri: CHARITY_ENTREPRENEURSHIP,
    name: "Charity Entrepreneurship",
    donation: "5%",
    siteUrl: "https://www.charityentrepreneurship.com/",
  },
];

export enum TECH_PROFICIENCY {
  PRODUCTION = "PRODUCTION",
}

export const TECHNOLOGIES = {
  LANGUAGES: [
    {
      name: "TypeScript",
      icons: [TypeScriptIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "Python",
      icons: [PythonIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    { name: "Java", icons: [JavaIcon] },
  ],
  WEB: [
    {
      name: "Next JS",
      icons: [NextJsIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    { name: "Gatsby JS", icons: [GatsbyIcon] },
    { name: "SvelteKit", icons: [SveltekitIcon] },
  ],
  MOBILE: [
    {
      name: "React Native and Expo",
      icons: [ReactNativeIcon, ExpoIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    { name: "Ionic with Capacitor", icons: [IonicIcon, CapacitorIcon] },
    { name: "Android", icons: [AndroidIcon] },
  ],
  BACKEND: [
    {
      name: "Django",
      icons: [DjangoIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "Nest JS",
      icons: [NestJsIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "Serverless",
      icons: [ServerlessIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    { name: "Firebase", icons: [FirebaseIcon] },
  ],
  DATABASES: [
    {
      name: "Postgres",
      icons: [PostgresIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "DynamoDB",
      icons: [DynamoDbIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    { name: "MongoDB", icons: [MongoDbIcon] },
  ],
  INFRASTRUCTURE: [
    {
      name: "Git and GitHub",
      icons: [GitIcon, GitHubIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "AWS",
      icons: [AwsIcon, Ec2Icon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "Docker",
      icons: [DockerIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "Terraform",
      icons: [TerraformIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
  ],
  DEVELOPMENT: [
    {
      name: "2021 MacBook Pro M1",
      icons: [AppleIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
    {
      name: "VS Code",
      icons: [VsCodeIcon],
      experience: TECH_PROFICIENCY.PRODUCTION,
    },
  ],
};

export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  BLOG: "/blog",
  JOURNAL: "/journal",
  GIVING: "/giving",
  TECH: "/tech",
  RESOURCES: "/resources",
};

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
];

export const RESOURCE_ICONS: { [k: string]: FC<JSX.IntrinsicElements["svg"]> } =
  {
    BOOK: BookIcon,
    VIDEO: VideoIcon,
    CHANNEL: FilmIcon,
    ARTICLE: ArticleIcon,
  };
