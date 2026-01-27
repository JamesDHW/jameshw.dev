import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import avatar1 from "../../../public/avatar1.png";
import qrCodeLight from "../../../public/website-qr-light.png";
import qrCodeDark from "../../../public/website-qr-dark.png";
import { EnvelopeIcon } from "icons/envelope";
import { LinkIcon } from "icons/link";
import { GitHubIcon } from "icons/technologies/infrastructure/github";
import { WorkIcon } from "icons/work";
import { SchoolIcon } from "icons/school";
import { IllustratorIcon } from "icons/illustrator";
import { NextJsIcon } from "icons/technologies/web-frontend/next-js";
import { ReactNativeIcon } from "icons/technologies/mobile/react-native";
import { SveltekitIcon } from "icons/technologies/web-frontend/sveltekit";
import { ViteIcon } from "icons/technologies/web-frontend/vite";
import { DjangoIcon } from "icons/technologies/web-backend/django";
import { NestJsIcon } from "icons/technologies/web-backend/nest";
import { ServerlessIcon } from "icons/technologies/web-backend/serverless";
import { FirebaseIcon } from "icons/technologies/web-backend/firebase";
import { PostgresIcon } from "icons/technologies/database/postgres";
import { MicrosoftSqlIcon } from "icons/technologies/database/microsoft-sql";
import { DynamoDbIcon } from "icons/technologies/database/dynamo";
import { MongoDbIcon } from "icons/technologies/database/mongo";
import { AwsIcon } from "icons/technologies/infrastructure/aws";
import { TerraformIcon } from "icons/technologies/infrastructure/terraform";
import { DockerIcon } from "icons/technologies/infrastructure/docker";
import { GitIcon } from "icons/technologies/infrastructure/git";
import { TypeScriptIcon } from "icons/technologies/languages/typescript";
import { PythonIcon } from "icons/technologies/languages/python";
import { JavaIcon } from "icons/technologies/languages/java";
import { GroovyIcon } from "icons/technologies/languages/groovy";
import Link from "next/link";
import { ArrowRightIcon } from "icons/arrow-right";
import { GitPullRequestIcon } from "icons/git-pull-request";
import { dateDiff } from "components/Common/Timeline/Timeline.utils";
import { LinkedInIcon } from "icons/linkedIn";
import { ToolsIcon } from "icons/tools";


type ResumeProps = {
    searchParams: Promise<{ theme?: string }>;
};

export default async function Resume({ searchParams }: ResumeProps) {
    const params = await searchParams;
    const isDark = params.theme === 'dark';

    return (
        <html lang="en" className={isDark ? 'dark' : ''} suppressHydrationWarning>
            <head>
                <style>{`
                    @media print {
                        @page {
                            margin: 0.25in;
                            size: letter;
                        }
                        html {
                            zoom: 0.88;
                        }
                        header {
                            margin-bottom: 0.25rem !important;
                            padding-bottom: 0.25rem !important;
                        }
                        section {
                            margin-bottom: 0.5rem !important;
                        }
                        p {
                            margin-bottom: 0.25rem !important;
                        }
                        h1 {
                            font-size: 1.9rem !important;
                            margin-bottom: 0.1rem !important;
                        }
                        h2 {
                            font-size: 1.25rem !important;
                            margin-bottom: 0.35rem !important;
                            padding-bottom: 0.15rem !important;
                        }
                        h3 {
                            font-size: 0.95rem !important;
                            margin-bottom: 0.25rem !important;
                        }
                        li {
                            line-height: 1.2 !important;
                        }
                        .shadow-lg {
                            box-shadow: none !important;
                        }
                        * {
                            -webkit-print-color-adjust: exact !important;
                            print-color-adjust: exact !important;
                            color-adjust: exact !important;
                        }
                    }
                `}</style>
            </head>
            <body className="min-h-screen bg-white dark:bg-gray-900">
                <div className="max-w-5xl mx-auto p-8 print:p-0 print:max-w-full text-gray-900 dark:text-gray-100 print:text-[11px] print:leading-tight">

                    {/* Header */}
                    <header className="flex items-start gap-6 print:gap-4 mb-2 print:mb-1 pb-2 print:pb-1 border-b-2 border-ice-800 dark:border-ice-400">

                        <div className="flex-1">
                            <h1 className="text-4xl print:text-3xl font-bold mb-1 print:mb-0.5 text-gray-900 dark:text-white">James Haworth Wheatman</h1>
                            <p className="text-xl print:text-lg text-gray-700 dark:text-gray-200 mb-3 print:mb-2">
                                Builder, Team Lead, Problem Solver
                            </p>
                            <p className="font-bold text-gray-600 dark:text-gray-400 italic mb-3 print:mb-2">
                                I build value-driven software systems and teams by creating the right conditions for people to effortlessly deliver high-quality work.
                            </p>
                            <div className="flex flex-wrap gap-4 print:gap-3 text-base print:text-sm font-bold">
                                <Link href="mailto:JamesHaworthWheatman@gmail.com" className="flex items-center gap-1.5 text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400 after:content-['_('attr(href)')'] after:text-xs after:text-gray-600 after:hidden">
                                    <EnvelopeIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                    <span>JamesHaworthWheatman@gmail.com</span>
                                </Link>
                                <Link href="https://github.com/JamesDHW/" className="flex items-center gap-1.5 text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400 after:content-['_('attr(href)')'] after:text-xs after:text-gray-600 after:hidden" target="_blank" rel="noreferrer">
                                    <GitHubIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                    <span>JamesDHW</span>
                                </Link>
                                <Link href="https://www.linkedin.com/in/jamesdhw/" className="flex items-center gap-1.5 text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400 after:content-['_('attr(href)')'] after:text-xs after:text-gray-600 after:hidden" target="_blank" rel="noreferrer">
                                    <LinkedInIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                    <span>JamesDHW</span>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="relative w-36 h-36 print:w-28 print:h-28 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                                <Image
                                    alt="James Haworth Wheatman"
                                    src={avatar1}
                                    className="object-cover"
                                    placeholder="blur"
                                    fill
                                />
                            </div>

                            {/* QR Code with link */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="relative w-36 h-36 print:w-28 print:h-28 flex-shrink-0">
                                    <Image
                                        alt="Website QR Code"
                                        src={isDark ? qrCodeDark : qrCodeLight}
                                        className="object-contain"
                                        placeholder="blur"
                                        fill
                                    />
                                </div>
                                <a href="https://www.jameshw.dev" className="flex items-center gap-1.5 my-auto text-base font-bold text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400 after:content-['_('attr(href)')'] after:text-xs after:text-gray-600 after:hidden" target="_blank" rel="noreferrer">
                                    <LinkIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                    <span>www.jameshw.dev</span>
                                </a>
                            </div>
                        </div>
                    </header>

                    {/* Introduction */}
                    <section className="mb-6 print:mb-4">
                        <p className="text-gray-800 dark:text-gray-200 italic">
                            Since 2020, I've been building career capital by delivering high-impact software. I'm now looking to leverage this experience to tackle ambitious problems where long-term value, technical quality, and learning matter.
                        </p>
                    </section>

                    {/* Working With Me */}
                    <section className="mb-6 print:mb-4 break-inside-avoid">
                        <h2 className="flex items-center gap-2 text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            <GitPullRequestIcon className="w-7 h-7 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                            Working With Me
                        </h2>

                        <div className="flex flex-row">

                            <div className="flex-1 pr-4 border-r border-gray-300 dark:border-gray-600">
                                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">What I Bring</h3>
                                <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 pl-5">
                                    <li><span className="font-semibold">Value First:</span> I design value-driven software systems–fast initial delivery without sacrificing future speed or adaptability.</li>
                                    <li><span className="font-semibold">Structured Problem-Solving:</span> I use Lean thinking to surface constraints, solve root causes, and continuously improve how value is delivered.</li>
                                    <li><span className="font-semibold">Coaching:</span> I grow Engineers and Tech Leads into independent problem-solvers with strong judgment around quality and systems.</li>
                                </ul>
                            </div>

                            <div className="flex-1 pl-4">
                                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">What I Look For</h3>

                                <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 pl-5">
                                    <li><span className="font-semibold">High Standards:</span> An environment where quality, professionalism, and outcomes matter—and where I'm held accountable to them.</li>
                                    <li><span className="font-semibold">Learning Safety:</span> Space to experiment, make mistakes, and improve through feedback rather than blame.</li>
                                    <li><span className="font-semibold">Meaningful Problems:</span> Work where the problems are real, the impact is visible.</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-6 print:mb-4 relative">
                        <div className="flex justify-between items-center w-full mb-3 border-b border-ice-800 dark:border-ice-400 pb-1">
                            <h2 className="flex items-center gap-2 text-2xl font-bold text-ice-800 dark:text-ice-400">
                                <WorkIcon className="w-7 h-7 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                Experience
                            </h2>
                            <p className="text-sm text-gray-700 dark:text-gray-300 italic">(Organisation: Theodo UK)</p>
                        </div>


                        <div className="mb-2 break-inside-avoid border-b border-gray-300 dark:border-gray-600 pb-1">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Engineering Manager</h3>
                                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap">Jan 2025 - Present ({dateDiff(new Date('2025-01-01'), new Date())})</span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 italic">
                                Own project conditions across teams, coach Tech Leads, and partner with clients on high-impact strategic decisions.
                            </p>
                        </div>

                        <div className="mb-2 break-inside-avoid border-b border-gray-300 dark:border-gray-600 pb-1">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Tech Lead</h3>
                                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap">Apr 2022 - Dec 2024 ({dateDiff(new Date('2022-04-01'), new Date('2024-12-01'))})</span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 italic">
                                Create and maintain the technical and organisational conditions for Developers to deliver value effortlessly.
                            </p>
                        </div>

                        <div className="mb-2 break-inside-avoid border-b border-gray-300 dark:border-gray-600 pb-1">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Coach</h3>
                                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap">Nov 2021 - Present ({dateDiff(new Date('2021-11-01'), new Date())})</span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 italic">
                                Coach engineers through weekly structured sessions on goal clarity, self-awareness, actionable planning, and accountability.
                            </p>
                        </div>

                        <div className="mb-2 break-inside-avoid">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Full-Stack Engineer</h3>
                                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap">Nov 2020 - Apr 2022 (1 year, 6 months)</span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 italic">
                                Co-design high-quality solutions with clients, minimising the resources required to build and maintain the desired system.
                            </p>
                        </div>


                        <div className="border-t border-gray-300 dark:border-gray-600 my-3"></div>

                        <div className="mb-6 print:mb-4 break-inside-avoid">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Selected Client Projects</h3>

                            <div className="mb-4 ml-4">
                                <div className="flex items-center justify-between mb-1">
                                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                                        Asset Finance Platform (International Bank) as Engineering Manager
                                    </p>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <MicrosoftSqlIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <JavaIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <GroovyIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <ReactNativeIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <TypeScriptIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                    </div>
                                </div>
                                <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                                    <li>Led migration from Groovy on Grails to TypeScript and modern tooling.</li>
                                    <li>Halved end-to-end test runtime, significantly improving developer feedback loops and delivery speed.</li>
                                </ul>
                            </div>

                            <div className="mb-4 ml-4">
                                <div className="flex items-center justify-between mb-1">
                                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                                        Adobe Illustrator Extension (Fashion Retail) as Tech Lead
                                    </p>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <IllustratorIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <ViteIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <ReactNativeIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <TypeScriptIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                    </div>
                                </div>
                                <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                                    <li>Designed and delivered a greenfield extension with a custom build pipeline.</li>
                                    <li>Reduced development friction by enabling seamless ExtendScript ↔ API integration.</li>
                                </ul>
                            </div>



                            <div className="mb-4 ml-4">
                                <div className="flex items-center justify-between mb-1">
                                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                                        Terrorism Modelling and Data Platform (International Insurance Broker) as Tech Lead
                                    </p>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <TerraformIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <AwsIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <PostgresIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <DjangoIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <PythonIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <ReactNativeIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <TypeScriptIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                    </div>
                                </div>
                                <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                                    <li>Modelled a simulation of the disruption caused by terror attacks for an existing insurance data platform.</li>
                                    <li>Added a "GeoWizard" feature for uploading and manipulating geospatial CSV data.</li>
                                </ul>
                            </div>

                        </div>

                        <div className="absolute bottom-0 right-0">

                            <Link
                                href="/experience"
                                className="inline-flex items-center text-xs bg-gray-200 rounded-lg dark:bg-gray-600 p-1 px-2 ring-gray-300 transition-all"
                            >
                                More Projects <ArrowRightIcon className="h-4 w-4 ml-1" />
                            </Link>
                        </div>
                    </section>

                    {/* Tech Stack + Education */}
                    <section className="mb-6 print:mb-4 grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 print:gap-4">
                        <div className="break-inside-avoid">
                            <h2 className="flex items-center gap-2 text-2xl font-bold text-ice-800 dark:text-ice-400 mb-3 border-b border-ice-800 dark:border-ice-400 pb-1">
                                <ToolsIcon className="w-7 h-7 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                Tech Stack Highlights
                            </h2>

                            <p className="text-gray-800 dark:text-gray-200 italic text-sm mb-3">
                                I choose tools and architectures based on how well they support fast feedback, change tolerance, and long-term maintainability—not novelty.
                            </p>
                            <div className="space-y-1 text-xs leading-tight">
                                <div className="flex items-start gap-2">
                                    <p className="w-24 shrink-0 font-bold text-gray-700 dark:text-gray-300">Frontend</p>
                                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-gray-600 dark:text-gray-400">
                                        <span className="inline-flex items-center gap-1">
                                            <NextJsIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Next.js
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <ReactNativeIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            React Native
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <SveltekitIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            SvelteKit
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <ViteIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Vite
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2">
                                    <p className="w-24 shrink-0 font-bold text-gray-700 dark:text-gray-300">Backend</p>
                                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-gray-600 dark:text-gray-400">
                                        <span className="inline-flex items-center gap-1">
                                            <DjangoIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Django
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <NestJsIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Nest
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <ServerlessIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Serverless
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <FirebaseIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Firebase
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2">
                                    <p className="w-24 shrink-0 font-bold text-gray-700 dark:text-gray-300">Databases</p>
                                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-gray-600 dark:text-gray-400">
                                        <span className="inline-flex items-center gap-1">
                                            <PostgresIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Postgres
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <MicrosoftSqlIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            SQL
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <DynamoDbIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            DynamoDB
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <MongoDbIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            MongoDB
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2">
                                    <p className="w-24 shrink-0 font-bold text-gray-700 dark:text-gray-300">Infra</p>
                                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-gray-600 dark:text-gray-400">
                                        <span className="inline-flex items-center gap-1">
                                            <AwsIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            AWS
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <TerraformIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Terraform
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <DockerIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Docker
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <GitIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Git
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2">
                                    <p className="w-24 shrink-0 font-bold text-gray-700 dark:text-gray-300">Languages</p>
                                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-gray-600 dark:text-gray-400">
                                        <span className="inline-flex items-center gap-1">
                                            <TypeScriptIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            TypeScript
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <PythonIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Python
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <JavaIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Java
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <GroovyIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Groovy
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="break-inside-avoid">
                            <h2 className="flex items-center gap-2 text-2xl font-bold text-ice-800 dark:text-ice-400 mb-3 border-b border-ice-800 dark:border-ice-400 pb-1">
                                <SchoolIcon className="w-7 h-7 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                Education
                            </h2>

                            <div className="space-y-3">
                                <div className="text-left">
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">MSc Computer Science, First class (Hons)</h3>
                                    <p className="dark:text-gray-300">University College London</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Sept 2019 - Sept 2020 (1 year)</p>
                                </div>

                                <div className="text-left">
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">BSc Physics, First class (Hons)</h3>
                                    <p className="dark:text-gray-300">The University of Sheffield</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Sept 2015 - Jul 2018 (2 years, 10 months)</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Analytics />
            </body>
        </html>
    );
}
