import { TypeScriptIcon } from "src/icons/technologies/languages/typescript";
import { PythonIcon } from "src/icons/technologies/languages/python";
import { JavaIcon } from "src/icons/technologies/languages/java";

import { DockerIcon } from "src/icons/technologies/infrastructure/docker";
import { GitIcon } from "src/icons/technologies/infrastructure/git";
import { GitHubIcon } from "src/icons/technologies/infrastructure/github";
import { AwsIcon } from "src/icons/technologies/infrastructure/aws";
import { Ec2Icon } from "src/icons/technologies/infrastructure/ec2";
import { TerraformIcon } from "src/icons/technologies/infrastructure/terraform";

import { NextJsIcon } from "src/icons/technologies/web-frontend/next-js";
import { GatsbyIcon } from "src/icons/technologies/web-frontend/gatsby";
import { SveltekitIcon } from "src/icons/technologies/web-frontend/sveltekit";

import { ReactNativeIcon } from "src/icons/technologies/mobile/react-native";
import { ExpoIcon } from "src/icons/technologies/mobile/expo";
import { IonicIcon } from "src/icons/technologies/mobile/ionic";
import { CapacitorIcon } from "src/icons/technologies/mobile/capacitor";
import { AndroidIcon } from "src/icons/technologies/mobile/android";

import { DjangoIcon } from "src/icons/technologies/web-backend/django";
import { NestJsIcon } from "src/icons/technologies/web-backend/nest";
import { FirebaseIcon } from "src/icons/technologies/web-backend/firebase";
import { ServerlessIcon } from "src/icons/technologies/web-backend/serverless";

import { DynamoDbIcon } from "src/icons/technologies/database/dynamo";
import { MongoDbIcon } from "src/icons/technologies/database/mongo";
import { PostgresIcon } from "src/icons/technologies/database/postgres";

import { VsCodeIcon } from "src/icons/technologies/development/vscode";
import { AppleIcon } from "src/icons/technologies/development/apple";

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
