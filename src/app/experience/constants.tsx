import { TimelineSection } from "components/Common/Timeline/Timeline";
import { TechListDisplay } from "components/Tech/TechListDisplay/TechListDisplay";
import { IllustratorIcon } from "icons/illustrator";
import { SchoolIcon } from "icons/school";
import { DynamoDbIcon } from "icons/technologies/database/dynamo";
import { IbmIcon } from "icons/technologies/database/ibm";
import { MicrosoftSqlIcon } from "icons/technologies/database/microsoft-sql";
import { PostgresIcon } from "icons/technologies/database/postgres";
import { AwsIcon } from "icons/technologies/infrastructure/aws";
import { ContentfulIcon } from "icons/technologies/infrastructure/contentful";
import { DockerIcon } from "icons/technologies/infrastructure/docker";
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
import { ViteIcon } from "icons/vite";
import { WorkIcon } from "icons/work";

export const EXPERIENCES: TimelineSection[] = [
  {
    title: "Theodo UK - Engineering Manager",
    startDate: new Date("2025-01-20"),
    date: new Date(),
    Icon: WorkIcon,
    description: (
      <p>
        As an Engineering Manager, I am responsible for managing Tech Leads
        across different client projects, ensuring they have everything they
        need to lead their teams to success. Meanwhile, I remain a Tech Lead
        myself on a project to keep my technical skills sharp.
      </p>
    ),
    items: [
      {
        title: "Role: Coach",
        startDate: new Date("2021-11-30"),
        date: new Date(),
        description: (
          <div>
            At Theodo, across my different positions in the company, I have
            greatly enjoyed being a coach to 4 developers and 1 Tech Lead.
            Through weekly coaching sessions, I drive my coachee{"'"}s
            progression by:
            <ol className="pl-8 list-decimal">
              <li>facilitating clarity in their goals;</li>
              <li>
                raising awareness of their current strengths & weaknesses;
              </li>
              <li>guiding them to create an actionable plan; and</li>
              <li>
                holding them to account for following or amending the plan.
              </li>
            </ol>
          </div>
        ),
      },
      {
        title: "Client: Adobe Illustrator Extension for Fashion Retailer",
        startDate: new Date("2025-02-01"),
        date: new Date(),
        description: (
          <>
            <TechListDisplay
              list={[
                {
                  name: "TypeScript, React, Vite, Adobe Illustrator CEP",
                  icons: [
                    TypeScriptIcon,
                    ReactNativeIcon,
                    ViteIcon,
                    IllustratorIcon,
                  ],
                },
              ]}
            />
            <p>
              Built a custom extension for Adobe Illustrator to allow users to import and export designs from the platform.
              Designed a build system to allow for ExtendScript to interact with the Adobe Illustrator API in TypeScript.
            </p>
          </>
        ),
      },
      {
        title: "Client: Asset Finance Platform for International Bank",
        startDate: new Date("2025-02-01"),
        date: new Date(),
        description: (
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
        ),
      },
    ],
  },
  {
    title: "Theodo UK - Tech Lead",
    startDate: new Date("2022-04-25"),
    date: new Date(),
    Icon: WorkIcon,
    description: (
      <p>
        As a Tech Lead on client projects, it is my job to create and maintain
        working conditions in which Developers can deliver the most value to the
        client whilst learning and progressing.
        <br />
        This starts by defining the technical conditions for a project to
        succeed (project conception and architecture) and continues by working
        with the developers to maintain high standards.
      </p>
    ),
    link: "/blog/2024-01-24/lean-tech-lead",
    items: [
      {
        title: "Client: Asset Finance Platform for International Bank",
        startDate: new Date("2023-02-27"),
        date: new Date("2025-02-01"),
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
              Asset Finance management enterprise application with an event
              sourcing architecture. I managed the migration towards TypeScript,
              reaching 100% file coverage, migrated WebPack to Vite, managed
              improvements to Cypress e2e tests (including a migration to
              Playwright) which reduced the runtime by 50%, and managed upgrades
              to software versions (e.g. Groovy on Grails from v3 to v5).
            </p>
          </>
        ),
      },
      {
        title:
          "Client: Companion Bluetooth Mobile App to Luxury Electric Scooter",
        startDate: new Date("2023-01-26"),
        date: new Date("2023-02-09"),
        description: (
          <>
            <TechListDisplay
              list={[
                {
                  name: "Android, TypeScript, React Native, Expo",
                  icons: [
                    AndroidIcon,
                    TypeScriptIcon,
                    ReactNativeIcon,
                    ExpoIcon,
                  ],
                },
              ]}
            />
            <p>
              Created a native Android plugin for turn-by-turn navigation in the
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
            <p>
              Built and deployed an Instagram-like social media platform from
              scratch, which contained most typical social media features - user
              management, image posts and feeds, liking, commenting, reposting,
              and following.
            </p>
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
              disruption caused by terror attacks for an existing insurance data
              platform. Added a {'"'}GeoWizard{'"'} feature for uploading and
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
                  icons: [
                    HubSpotIcon,
                    ContentfulIcon,
                    TypeScriptIcon,
                    NextJsIcon,
                  ],
                },
              ]}
            />
            <p>
              Worked within a startup environment alongside an international
              management consultancy to build a CMS-configurable sales funnel to
              compete with less agile market and seamlessly deliver Photovoltaic
              cells to private properties. This included tools to select your
              roof on a map and cost calculators to identify when energy
              production will pay off the upfront installation cost.
            </p>
          </>
        ),
      },
    ],
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
    items: [
      {
        title: "Client: Gaming Mobile App",
        startDate: new Date("2022-02-10"),
        date: new Date("2022-04-22"),
        description: (
          <>
            <TechListDisplay
              list={[
                {
                  name: "TypeScript, React Native, Expo",
                  icons: [TypeScriptIcon, ReactNativeIcon, ExpoIcon],
                },
              ]}
            />
            <p>
              Built a React Native app from scratch with account management to
              play games embedded using a Webview.
            </p>
          </>
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
              Built a multistage fully CMS-configurable questionnaire for
              onboarding customers onto the portfolio management offering. The
              question flow lead to a results page which showed customised which
              depended on question responses.
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
              A solo project, migrating AWS infrastructure for an AI material
              synthesis application to be multi-regional in AWS so that
              computational jobs running on P3 machines could be queued (SQS)
              and parallelised appropriately due to a lack of availability of
              machines in a single region.
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
                  name: "NestJS, Forrest Admin, React",
                  icons: [NestJsIcon, ForrestAdminIcon, ReactNativeIcon],
                },
              ]}
            />
            <p>
              Back-office and dashboard for doctors to access medical research
              participation information about patients. Created a custom
              calendar display component and PDF export functionality.
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
              As the main developer, built the frontend for the internal tool
              which powers budgeting for one of the big four accounting firms.
              Built custom spreadsheet components to display roll-up financial
              data and serialised and deserialised multidimensional data stored
              in the OLAP database.
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
                  name: "AWS Serverless, Docker, DynamoDB, Python, NextJS",
                  icons: [
                    AwsIcon,
                    DockerIcon,
                    DynamoDbIcon,
                    PythonIcon,
                    NextJsIcon,
                  ],
                },
              ]}
            />
            <p>
              Migrated a Python-based pollution dispersion modelling desktop app
              to the cloud for better UX, distribution, and simulation
              paralellisation. Later returning to make enhancements to the
              underlying dockerised model and display results on an interactive
              map.
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
              Greenfield React Native app built for a startup connecting doctors
              to the providers of medical supplies in the US.
            </p>
          </>
        ),
      },
    ],
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
    title: "MSc Computer Science - University College London",
    Icon: SchoolIcon,
    startDate: new Date("2019-09-30"),
    date: new Date("2020-09-30"),
    description: "First class (Hons).",
    link: "/blog/2020-09-01/msc-projects",
    items: [
      {
        title: "UCL Student Residence Advisor",
        startDate: new Date("2019-09-30"),
        date: new Date("2020-06-30"),
        description:
          "Provided pastoral support in undergraduate accommodation.",
      },
    ],
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
    items: [
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
          "Designed, implemented, and delivered two Python courses to undergraduates and PhDs.\
          The enterprise was financially stable and continues years later.",
      },
      {
        title: "Student Ambassador - The University of Sheffield",
        startDate: new Date("2017-11-30"),
        date: new Date("2018-03-30"),
        description:
          "Welcomed prospective students gave tours of the Physics department.",
      },
    ],
  },
  {
    title: "A Levels - Cardinal Newman College, Preston",
    Icon: SchoolIcon,
    startDate: new Date("2013-09-30"),
    date: new Date("2015-06-30"),
    description: "Studied Physics, Maths, and French.",
  },
];
