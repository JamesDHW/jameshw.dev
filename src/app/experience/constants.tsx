import { TimeLineItem } from "components/Common/Timeline/Timeline";
import { SchoolIcon } from "icons/school";
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
    link: "https://www.jameshw.dev/blog/2024-01-24/lean-tech-lead",
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
    link: "https://www.jameshw.dev/blog/2020-09-01/msc-projects",
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
    link: "https://www.jameshw.dev/blog/2020-07-03/python-natural-language-code-parser",
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
    link: "https://www.jameshw.dev/blog/2020-07-12/enactus-sheffield-alumnus-interview",
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
