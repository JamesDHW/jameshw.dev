import { TimeLineItem } from "components/Common/Timeline/Timeline";
import { TechListDisplay } from "components/Tech/TechListDisplay/TechListDisplay";
import { SchoolIcon } from "icons/school";
import { DynamoDbIcon } from "icons/technologies/database/dynamo";
import { IbmIcon } from "icons/technologies/database/ibm";
import { MicrosoftSqlIcon } from "icons/technologies/database/microsoft-sql";
import { PostgresIcon } from "icons/technologies/database/postgres";
import { AwsIcon } from "icons/technologies/infrastructure/aws";
import { ContentfulIcon } from "icons/technologies/infrastructure/contentful";
import { ForrestAdminIcon } from "icons/technologies/infrastructure/forrest-admin";
import { HubSpotIcon } from "icons/technologies/infrastructure/hubspot";
import { SupabaseIcon } from "icons/technologies/infrastructure/supabase";
import { TerraformIcon } from "icons/technologies/infrastructure/terraform";
import { GroovyIcon } from "icons/technologies/languages/groovy";
import { JavaIcon } from "icons/technologies/languages/java";
import { PythonIcon } from "icons/technologies/languages/python";
import { TypeScriptIcon } from "icons/technologies/languages/typescript";
import { AndroidIcon } from "icons/technologies/mobile/android";
import { ExpoIcon } from "icons/technologies/mobile/expo";
import { ReactNativeIcon } from "icons/technologies/mobile/react-native";
import { DjangoIcon } from "icons/technologies/web-backend/django";
import { NestJsIcon } from "icons/technologies/web-backend/nest";
import { NextJsIcon } from "icons/technologies/web-frontend/next-js";
import { WorkIcon } from "icons/work";

export const EXPERIENCES: TimeLineItem[] = [
  {
    title: "Theodo UK - Tech Lead",
    startDate: new Date("2022-04-25"),
    date: new Date(),
    Icon: WorkIcon,
    description:
      "Transitioned to a management role as the most senior developer in the team\
      while focusing on helping the team to deliver value effortlessly.",
    link: "/blog/2024-01-24/lean-tech-lead",
  },
  {
    title: "Client: Asset Finance Platform for International Bank",
    startDate: new Date("2023-02-27"),
    date: new Date(),
    description: (
      <>
        <TechListDisplay
          list={[
            {
              name: "Java, Groovy on Grails, Microsoft SQL, TypeScript, React",
              icons: [
                JavaIcon,
                GroovyIcon,
                MicrosoftSqlIcon,
                TypeScriptIcon,
                ReactNativeIcon,
              ],
            },
          ]}
        />
        <p>
          Asset Finance management application with event sourcing architecture.
        </p>
      </>
    ),
  },
  {
    title: "Client: Companion Bluetooth Mobile App to Luxury Electric Scooter",
    startDate: new Date("2023-01-26"),
    date: new Date("2023-02-09"),
    description: (
      <>
        <TechListDisplay
          list={[
            {
              name: "Android, TypeScript, React Native, Expo",
              icons: [AndroidIcon, TypeScriptIcon, ReactNativeIcon, ExpoIcon],
            },
          ]}
        />
        <p>
          Created Native Android plugin for turn-by-turn navigation in the
          companion app which connects to the scooter via Bluetooth.
        </p>
      </>
    ),
  },
  {
    title: "Client: Social Media App for Trading High-Value Sports Gear",
    startDate: new Date("2022-11-01"),
    date: new Date("2023-01-13"),
    description: (
      <>
        <TechListDisplay
          list={[
            {
              name: "Supabase, Postgres, TypeScript, React Native, Expo",
              icons: [
                SupabaseIcon,
                PostgresIcon,
                TypeScriptIcon,
                ReactNativeIcon,
                ExpoIcon,
              ],
            },
          ]}
        />
        <p>Built an Instagram-like social media platform from scratch.</p>
      </>
    ),
  },
  {
    title:
      "Client: Terrorism Modelling and Data Platform for International Insurance Broker",
    startDate: new Date("2022-09-05"),
    date: new Date("2022-11-04"),
    link: "https://blog.theodo.com/2022/03/anotherday-big-data-geospatial-analytics-platform/",
    description: (
      <>
        <TechListDisplay
          list={[
            {
              name: "Terraform, AWS, Django, Postgres, TypeScript, React",
              icons: [
                TerraformIcon,
                AwsIcon,
                DjangoIcon,
                PostgresIcon,
                TypeScriptIcon,
                ReactNativeIcon,
              ],
            },
          ]}
        />
        <p>
          Used Django and Postgres (PostGIS) to model a simulation of the
          disruption caused by terror attacks for existing insurance data
          platform. Added {'"'}GeoWizard{'"'} feature for uploading and
          manipulating geospatial CSV data.
        </p>
      </>
    ),
  },
  {
    title: "Client: Austrian National Photovoltaic Provider",
    startDate: new Date("2022-04-25"),
    date: new Date("2022-09-02"),
    description: (
      <>
        <TechListDisplay
          list={[
            {
              name: "HubSpot, Contentful, TypeScript, NextJS",
              icons: [HubSpotIcon, ContentfulIcon, TypeScriptIcon, NextJsIcon],
            },
          ]}
        />
        <p>
          Worked within a startup environment alongside an international
          management consultancy to build a CMS-configurable sales funnel to
          compete with less agile market and seamlessly deliver Photovoltaic
          cells to private properties. This included tools to select your roof
          on a map and cost calculators to identify when energy production will
          pay off the upfront installation cost.
        </p>
      </>
    ),
  },
  {
    title: "Theodo UK - Full-Stack Engineer",
    startDate: new Date("2020-11-09"),
    date: new Date("2022-04-25"),
    Icon: WorkIcon,
    description:
      "Developed full-stack web and mobile apps across many sectors, from green tech,\
       to insurance, to finance, working within start-up teams building a business\
       from the ground up or within multinational organisations.",
  },
  {
    title: "Client: Gaming Mobile App",
    startDate: new Date("2023-01-26"),
    date: new Date("2023-02-09"),
    description: (
      <TechListDisplay
        list={[
          {
            name: "TypeScript, React Native, Expo",
            icons: [TypeScriptIcon, ReactNativeIcon, ExpoIcon],
          },
        ]}
      />
    ),
  },
  {
    title: "Client: International Provider of Private Portfolio Management",
    startDate: new Date("2022-01-06"),
    date: new Date("2022-02-11"),
    description: (
      <>
        <TechListDisplay
          list={[
            {
              name: "Contentful, TypeScript, NextJS",
              icons: [ContentfulIcon, TypeScriptIcon, NextJsIcon],
            },
          ]}
        />
        <p>
          Building a multistage CMS-configurable questionnaire for onboarding
          customers onto the portfolio management offering.
        </p>
      </>
    ),
  },
  {
    title: "Client: French Commercial Flooring Manufacturer",
    startDate: new Date("2021-11-22"),
    date: new Date("2021-12-14"),
    description: (
      <>
        <TechListDisplay
          list={[
            {
              name: "Terraform, AWS, Python",
              icons: [TerraformIcon, AwsIcon, PythonIcon],
            },
          ]}
        />
        <p>
          Solo project, migrating AWS infrastructure for an AI material
          synthesis application to multi-region in AWS to queue and parallelise
          computational jobs running on P3 machines.
        </p>
      </>
    ),
  },
  {
    title: "Client: Health-Tech Research Startup",
    startDate: new Date("2021-08-16"),
    date: new Date("2021-11-19"),
    description: (
      <>
        <TechListDisplay
          list={[
            {
              name: "NestJS, Forrest Admin, NextJS",
              icons: [NestJsIcon, ForrestAdminIcon, NextJsIcon],
            },
          ]}
        />
        <p>
          Back-office and dashboard for doctors to access medical research
          participation information about patients.
        </p>
      </>
    ),
  },
  {
    title: "Client: Accountancy Internal Tooling",
    startDate: new Date("2021-03-01"),
    date: new Date("2021-06-16"),
    description: (
      <>
        <TechListDisplay
          list={[
            {
              name: "IBM TM1 OLAP, NextJS",
              icons: [IbmIcon, NextJsIcon],
            },
          ]}
        />
        <p>
          Solo developer, built the frontend for the internal tool which powers
          budgeting for one of the big four accounting firms.
        </p>
      </>
    ),
  },
  {
    title: "Client: Pollution Dispersion Modeling Cloud Migration",
    startDate: new Date("2020-12-07"),
    date: new Date("2021-03-01"),
    link: "/blog/2021-08-21/serverless-for-long-computational-tasks",
    description: (
      <>
        <TechListDisplay
          list={[
            {
              name: "AWS Serverless, DynamoDB, Python, NextJS",
              icons: [AwsIcon, DynamoDbIcon, PythonIcon, NextJsIcon],
            },
          ]}
        />
        <p>
          Migrated a Python-based pollution dispersion modelling desktop app to
          the cloud for better UX, distribution, and simulation paralellisation.
          Later returning to make enhancements to the underlying dockerised
          model and display results on an interactive map.
        </p>
      </>
    ),
  },
  {
    title: "Client: Med-Tech Startup",
    startDate: new Date("2020-11-09"),
    date: new Date("2020-12-07"),
    description: (
      <>
        <TechListDisplay
          list={[
            {
              name: "AWS Serverless, DynamoDB, React Native",
              icons: [AwsIcon, DynamoDbIcon, ReactNativeIcon],
            },
          ]}
        />
        <p>
          Greenfield React Native app connecting doctors to providers of medical
          supplies int he US.
        </p>
      </>
    ),
  },
  {
    title: "Code4000 - Academy Facilitator, HMP Wandsworth",
    startDate: new Date("2020-09-25"),
    date: new Date("2020-11-09"),
    Icon: WorkIcon,
    description:
      "Created content and prepared web development training to equip prisoners\
      with the skills to rejoin the workforce and disincentivise recidivism.",
  },
  {
    title: "UCL Student Residence Advisor",
    startDate: new Date("2019-09-30"),
    date: new Date("2020-06-30"),
    description: "Provided pastoral support in undergraduate accommodation.",
  },
  {
    title: "MSc Computer Science - University College London",
    Icon: SchoolIcon,
    startDate: new Date("2019-09-30"),
    date: new Date("2020-09-30"),
    description: "First class (Hons).",
    link: "/blog/2020-09-01/msc-projects",
  },
  {
    title: "Programme Administrator - NCS: The Challenge",
    Icon: WorkIcon,
    startDate: new Date("2019-06-30"),
    date: new Date("2019-09-30"),
    description: "Administrated youth programmes.",
  },
  {
    title: "Natural Language Understanding Internship - Yagadi Ltd.",
    Icon: WorkIcon,
    startDate: new Date("2018-11-01"),
    date: new Date("2019-06-30"),
    description:
      "Developed training materials for Natural Language Understanding system;\
    created Android UI for concept demos; and created demonstrations of product.",
    link: "/blog/2020-07-03/python-natural-language-code-parser",
  },
  {
    title: "BSc Physics - The University of Sheffield",
    Icon: SchoolIcon,
    startDate: new Date("2015-09-30"),
    date: new Date("2018-07-30"),
    description: "First class (Hons).",
  },
  {
    title: "Vice President & Technology Director - Enactus Sheffield",
    startDate: new Date("2017-09-30"),
    date: new Date("2018-07-01"),
    description:
      "Facilitated other students with their self-development and progression through the company from the\
    admissions process to facilitating students into leadership roles.\
    Generated revenue for the company through managing two start-ups.\
    Led a team to develop an augmented reality game in Python to promote wellbeing and core strength in the elderly.\
    Reduced company costs by building and managing company websites and server space.",
    link: "/blog/2020-07-12/enactus-sheffield-alumnus-interview",
  },
  {
    title: "Founder & Course Tutor - Code Creators Sheffield",
    startDate: new Date("2017-10-30"),
    date: new Date("2018-07-01"),
    description:
      "Designed, implemented, and delivered two Python courses to undergraduates and PhDs.",
  },
  {
    title: "Student Ambassador - The University of Sheffield",
    startDate: new Date("2017-11-30"),
    date: new Date("2018-03-30"),
    description:
      "Welcomed prospective students gave tours of the Physics department.",
  },
  {
    title: "A Levels - Cardinal Newman College, Preston",
    Icon: SchoolIcon,
    startDate: new Date("2013-09-30"),
    date: new Date("2015-06-30"),
    description: "Studied Physics, Maths, and French.",
  },
];
