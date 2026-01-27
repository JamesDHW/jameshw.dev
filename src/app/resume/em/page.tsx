import { Analytics } from "@vercel/analytics/react";
import { GitHubIcon } from "icons/technologies/infrastructure/github";
import Link from "next/link";
import { LinkedInIcon } from "icons/linkedIn";
import { EnvelopeIcon } from "icons/envelope";


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
                    <header className="mb-6 print:mb-4 pb-2 print:pb-1 border-b-2 border-ice-800 dark:border-ice-400">
                        <h1 className="text-4xl print:text-3xl font-bold mb-1 print:mb-0.5 text-gray-900 dark:text-white">
                            James Haworth Wheatman
                        </h1>
                        <p className="text-xl print:text-lg text-gray-700 dark:text-gray-200 mb-2 print:mb-1">
                            Engineering Manager / Tech Lead
                        </p>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base print:text-sm font-semibold text-gray-700 dark:text-gray-200">
                            <span>London, UK</span>
                            <span aria-hidden="true">·</span>
                            <Link
                                href="mailto:jameshaworthwheatman@gmail.com"
                                className="inline-flex items-center gap-1.5 text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400"
                            >
                                <EnvelopeIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                <span>jameshaworthwheatman@gmail.com</span>
                            </Link>
                            <span aria-hidden="true">·</span>
                            <Link
                                href="https://www.linkedin.com/in/jamesdhw"
                                className="inline-flex items-center gap-1.5 text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkedInIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                <span>LinkedIn: /in/jamesdhw</span>
                            </Link>
                            <span aria-hidden="true">·</span>
                            <Link
                                href="https://github.com/JamesDHW"
                                className="inline-flex items-center gap-1.5 text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GitHubIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                <span>GitHub: JamesDHW</span>
                            </Link>
                        </div>
                    </header>

                    <section className="mb-6 print:mb-4 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            Impact Summary
                        </h2>
                        <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 pl-5">
                            <li>Progressed from Full-Stack Engineer → Tech Lead → Engineering Manager delivering complex client-facing systems since 2020</li>
                            <li>Led delivery across multiple teams in regulated, data-intensive, and high-stakes domains (finance, insurance, retail)</li>
                            <li>Accountable for delivery conditions, technical direction, and people development, not just output</li>
                            <li>Improved delivery speed and reliability through architecture modernisation, tooling upgrades, and test optimisation (e.g. 50% e2e runtime reduction)</li>
                            <li>Coach and develop senior engineers and Tech Leads, increasing autonomy and decision quality</li>
                            <li>Strong background in Lean systems thinking, risk reduction, and sustainable delivery</li>
                        </ul>
                    </section>

                    <section className="mb-6 print:mb-4">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            Experience
                        </h2>

                        <div className="mb-4 break-inside-avoid">
                            <div className="flex justify-between items-baseline gap-4 flex-wrap">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Engineering Manager — Theodo UK</h3>
                                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap">Jan 2025 – Present</span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 italic mt-1">
                                Scope: Delivery conditions, technical leadership, and people development across multiple client projects.
                            </p>
                            <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 pl-5 mt-2">
                                <li>Manage and coach Tech Leads across concurrent client engagements</li>
                                <li>Partner with clients on technical strategy, prioritisation, and risk management</li>
                                <li>Remain hands-on as Tech Lead on a key project to anchor decisions in reality</li>
                                <li>Drive improvements in delivery predictability, feedback loops, and codebase health</li>
                            </ul>
                        </div>

                        <div className="mb-4 break-inside-avoid">
                            <div className="flex justify-between items-baseline gap-4 flex-wrap">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Tech Lead — Theodo UK</h3>
                                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap">Apr 2022 – Dec 2024</span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 italic mt-1">
                                Scope: Technical leadership for client-facing products in high-ambiguity environments.
                            </p>
                            <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 pl-5 mt-2">
                                <li>Defined project architecture and technical standards for greenfield and legacy systems</li>
                                <li>Led migrations from legacy stacks to modern tooling (TypeScript, Vite, Playwright)</li>
                                <li>Reduced end-to-end test runtime by ~50%, significantly improving delivery cadence</li>
                                <li>Balanced short-term delivery with long-term maintainability in regulated environments</li>
                                <li>Mentored engineers into senior and lead roles</li>
                            </ul>
                        </div>

                        <div className="break-inside-avoid">
                            <div className="flex justify-between items-baseline gap-4 flex-wrap">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Full-Stack Engineer — Theodo UK</h3>
                                <span className="text-sm text-gray-700 dark:text-gray-300 font-semibold whitespace-nowrap">Nov 2020 – Apr 2022</span>
                            </div>
                            <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 pl-5 mt-2">
                                <li>Delivered full-stack web and mobile applications across finance, insurance, health-tech, and green-tech</li>
                                <li>Worked directly with clients to co-design solutions under real business constraints</li>
                                <li>Built production systems end-to-end, forming the foundation for later technical leadership</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-6 print:mb-4 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            Selected Delivery Outcomes
                        </h2>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Asset Finance Platform — International Bank</h3>
                            <p className="text-gray-800 dark:text-gray-200 italic mt-1">Engineering Manager / Tech Lead</p>
                            <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 pl-5 mt-2">
                                <li>Led migration from Groovy on Grails to TypeScript and modern frontend tooling</li>
                                <li>Improved CI reliability and developer feedback loops, accelerating delivery with lower risk</li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Adobe Illustrator Extension — Fashion Retail</h3>
                            <p className="text-gray-800 dark:text-gray-200 italic mt-1">Tech Lead</p>
                            <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 pl-5 mt-2">
                                <li>Designed and delivered a greenfield Illustrator extension with a custom build pipeline</li>
                                <li>Enabled seamless ExtendScript ↔ TypeScript API interaction, reducing development friction</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Terrorism Modelling & Data Platform — International Insurance Broker</h3>
                            <p className="text-gray-800 dark:text-gray-200 italic mt-1">Tech Lead</p>
                            <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 pl-5 mt-2">
                                <li>Designed geospatial data workflows and simulation tooling using Django and PostGIS</li>
                                <li>Delivered complex analytical features used for high-value insurance decision-making</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-6 print:mb-4 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            Coaching & Leadership
                        </h2>
                        <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 pl-5">
                            <li>Coach 4 engineers and 1 Tech Lead through weekly structured sessions</li>
                            <li>Focus areas: goal clarity, self-awareness, actionable planning, accountability</li>
                            <li>Strong track record of developing independent problem-solvers, not dependency</li>
                        </ul>
                    </section>

                    <section className="mb-6 print:mb-4 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            Technical Profile (Condensed)
                        </h2>
                        <div className="space-y-1 text-gray-800 dark:text-gray-200">
                            <p><span className="font-semibold">Languages:</span> TypeScript, Java, Groovy, Python</p>
                            <p><span className="font-semibold">Frontend:</span> React, React Native, Next.js</p>
                            <p><span className="font-semibold">Backend:</span> Django, Node.js, Groovy on Grails</p>
                            <p><span className="font-semibold">Data &amp; Infra:</span> Postgres, SQL Server, AWS, Terraform</p>
                            <p><span className="font-semibold">Quality &amp; Tooling:</span> Playwright, Cypress, CI/CD, Vite</p>
                        </div>
                    </section>

                    <section className="mb-2 print:mb-1 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            Education
                        </h2>
                        <div className="space-y-2 text-gray-800 dark:text-gray-200">
                            <p><span className="font-semibold">MSc Computer Science (First Class)</span> — University College London</p>
                            <p><span className="font-semibold">BSc Physics (First Class)</span> — University of Sheffield</p>
                        </div>
                    </section>
                </div>
                <Analytics />
            </body>
        </html>
    );
}
