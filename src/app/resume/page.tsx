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
import { NextJsIcon } from "icons/technologies/web-frontend/next-js";
import { ReactNativeIcon } from "icons/technologies/mobile/react-native";
import { SveltekitIcon } from "icons/technologies/web-frontend/sveltekit";
import { ViteIcon } from "icons/vite";
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
                            margin: 0.5in;
                            size: letter;
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
                <div className="max-w-5xl mx-auto p-8 print:p-0 print:max-w-full text-gray-900 dark:text-gray-100">

                    {/* Header */}
                    <header className="flex items-start gap-6 mb-8 pb-6 border-b-2 border-ice-800 dark:border-ice-400">

                        <div className="flex-1">
                            <h1 className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">James Haworth Wheatman</h1>
                            <p className="text-xl text-gray-700 dark:text-gray-200 mb-3">
                                Builder, Tech Lead, Engineering Manager
                            </p>
                            <p className="font-bold text-gray-600 dark:text-gray-400 italic mb-3">
                                Turning ambitious software challenges into high-impact solutions, while growing teams and individuals along the way.
                            </p>
                            <div className="flex flex-wrap gap-4 text-base font-bold">
                                <a href="mailto:JamesHaworthWheatman@gmail.com" className="flex items-center gap-1.5 text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400 after:content-['_('attr(href)')'] after:text-xs after:text-gray-600 print:after:inline after:hidden">
                                    <EnvelopeIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                    <span>JamesHaworthWheatman@gmail.com</span>
                                </a>
                                <a href="https://github.com/JamesDHW/" className="flex items-center gap-1.5 text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400 after:content-['_('attr(href)')'] after:text-xs after:text-gray-600 print:after:inline after:hidden" target="_blank" rel="noreferrer">
                                    <GitHubIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                    <span>GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/jamesdhw/" className="flex items-center gap-1.5 text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400 after:content-['_('attr(href)')'] after:text-xs after:text-gray-600 print:after:inline after:hidden" target="_blank" rel="noreferrer">
                                    <LinkIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="relative w-36 h-36 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
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
                                <div className="relative w-36 h-36 flex-shrink-0">
                                    <Image
                                        alt="Website QR Code"
                                        src={isDark ? qrCodeDark : qrCodeLight}
                                        className="object-contain"
                                        placeholder="blur"
                                        fill
                                    />
                                </div>
                                <a href="https://www.jameshw.dev" className="flex items-center gap-1.5 my-auto text-base font-bold text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400 after:content-['_('attr(href)')'] after:text-xs after:text-gray-600 print:after:inline after:hidden" target="_blank" rel="noreferrer">
                                    <LinkIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                    <span>www.jameshw.dev</span>
                                </a>
                            </div>
                        </div>
                    </header>

                    {/* Introduction */}
                    <section className="mb-6">
                        <p className="text-gray-800 dark:text-gray-200 italic">
                            I've spent the last five years building career capital—delivering high-impact software, growing teams, and mentoring others—and I'm looking to work in environments where I can multiply my impact, tackle ambitious problems, and help others grow along the way.
                        </p>
                    </section>

                    {/* Working With Me */}
                    <section className="mb-6 break-inside-avoid">
                        <h2 className="flex items-center gap-2 text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            <GitPullRequestIcon className="w-7 h-7 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                            Working With Me
                        </h2>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">What I Bring</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                                <li><span className="font-semibold">From Idea → Working Software:</span> I turn ambitious concepts into reliable, high-quality products.</li>
                                <li><span className="font-semibold">Lean Thinking & Problem-Solving:</span> I optimise processes, architecture, and teams to deliver maximal impact.</li>
                                <li><span className="font-semibold">Coaching & Leadership:</span> I grow individuals and teams to achieve more, faster, and with autonomy.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">Where I'm Looking to Work</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
                                <li>I thrive in teams where autonomy, competence, and curiosity drive outcomes.</li>
                                <li>I work best when the group is passionate about ambitious problems and learning together.</li>
                                <li>I deliver most impact in environments where my output is visible, meaningful, and reflected in results.</li>
                            </ul>
                        </div>

                    </section>

                    {/* Experience */}
                    <section className="mb-6">
                        <h2 className="flex items-center gap-2 text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            <WorkIcon className="w-7 h-7 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                            Experience
                        </h2>

                        <div className="mb-5 break-inside-avoid">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Theodo UK — Engineering Manager</h3>
                                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap ml-4">Jan 2025 - Present ({dateDiff(new Date('2025-01-01'), new Date())})</span>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                                <li>Managing multiple Tech Leads, ensuring teams deliver high-value outcomes while maintaining technical excellence.</li>
                                <li>Continued hands-on leadership on client projects to maintain deep technical competence.</li>
                            </ul>

                            <div className="mt-3 ml-4">
                                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Adobe Illustrator Extension for Fashion Retailer</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                                    <li>Built a TypeScript + React + Vite extension to integrate with Adobe Illustrator.</li>
                                    <li>Designed build system to enable ExtendScript ↔ Illustrator API integration.</li>
                                </ul>
                            </div>

                            <div className="mt-3 ml-4">
                                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Asset Finance Platform for International Bank</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                                    <li>Migrated legacy Groovy on Grails system to TypeScript & modern tooling.</li>
                                    <li>Improved e2e testing runtime by 50% and managed upgrades from v3 → v5.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-5 break-inside-avoid">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Theodo UK — Tech Lead</h3>
                                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap ml-4">Apr 2022 - Present ({dateDiff(new Date('2022-04-01'), new Date())}</span>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                                <li>Defined technical conditions and architectures for client projects.</li>
                                <li>Mentored developers to deliver high-value, production-quality software.</li>
                            </ul>

                            <div className="mt-3 ml-4">
                                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Key Projects:</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                                    <li><span className="font-semibold">Social Media App for High-Value Sports Trading:</span> Built Instagram-like platform from scratch (TypeScript, React Native).</li>
                                    <li><span className="font-semibold">Companion Bluetooth App for Luxury Electric Scooter:</span> Developed native Android plugin for turn-by-turn navigation.</li>
                                    <li><span className="font-semibold">Austrian Photovoltaic Provider:</span> Built CMS-configurable sales funnel with cost calculators and interactive maps.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-5 break-inside-avoid">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Theodo UK — Full-Stack Engineer</h3>
                                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap ml-4">Nov 2020 - Apr 2022 (1 year, 6 months)</span>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 ml-4">
                                <li>Built greenfield apps for health-tech, finance, gaming, and startups.</li>
                                <li>Migrated cloud infrastructure, built back-office dashboards, and delivered MVPs under tight deadlines.</li>
                            </ul>
                        </div>

                        <div className="w-full flex justify-end">
                            <Link
                                href="/experience"
                                className="inline-flex items-center text-sm bg-gray-200 rounded-lg dark:bg-gray-600 p-2 px-3 ring-gray-300 transition-all"
                            >
                                Learn more <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </Link>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="mb-6 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">Tech Stack Highlights</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
                            {/* Frontend Card */}
                            <div className="rounded-lg p-1 bg-gradient-to-br from-gray-500 to-gray-600">
                                <div className="bg-white dark:bg-gray-900 rounded-md p-2">
                                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Frontend</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <NextJsIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            NextJS
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <ReactNativeIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            RN
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <SveltekitIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Svelte
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <ViteIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Vite
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Backend Card */}
                            <div className="rounded-lg p-1 bg-gradient-to-br from-gray-600 to-gray-700">
                                <div className="bg-white dark:bg-gray-900 rounded-md p-2">
                                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Backend</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <DjangoIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Django
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <NestJsIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Nest
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <ServerlessIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Serverless
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <FirebaseIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Firebase
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Databases Card */}
                            <div className="rounded-lg p-1 bg-gradient-to-br from-gray-500 to-gray-700">
                                <div className="bg-white dark:bg-gray-900 rounded-md p-2">
                                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Databases</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <PostgresIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Postgres
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <MicrosoftSqlIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            SQL
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <DynamoDbIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Dynamo
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <MongoDbIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Mongo
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Infrastructure Card */}
                            <div className="rounded-lg p-1 bg-gradient-to-br from-gray-600 to-gray-500">
                                <div className="bg-white dark:bg-gray-900 rounded-md p-2">
                                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Infrastructure</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <AwsIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            AWS
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <TerraformIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Terraform
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <DockerIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Docker
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <GitIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Git
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Languages Card */}
                            <div className="rounded-lg p-1 bg-gradient-to-br from-gray-700 to-gray-600">
                                <div className="bg-white dark:bg-gray-900 rounded-md p-2">
                                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">Languages</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <TypeScriptIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            TypeScript
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <PythonIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Python
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <JavaIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Java
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                                            <GroovyIcon className="w-3.5 h-3.5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                            Groovy
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-800 dark:text-gray-200 italic text-sm">
                            I choose tools for maximum value delivery, not for their own sake.
                        </p>

                    </section>

                    {/* Education */}
                    <section className="mb-6 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">Education</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-start gap-2">
                                <SchoolIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400 mt-0.5" />
                                <div className="text-left">
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">MSc Computer Science, First class (Hons)</h3>
                                    <p className="dark:text-gray-300">University College London</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Sept 2019 - Sept 2020 (1 year)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <SchoolIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400 mt-0.5" />
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
