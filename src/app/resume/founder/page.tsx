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
                            Engineering Leader · Operator · Independent
                        </p>
                        <div className="space-y-3 text-gray-800 dark:text-gray-200">
                            <div className="space-y-1">
                                <p>
                                    I design and run software systems and teams in high-ambiguity, high-stakes environments.
                                    <br />
                                    My work sits at the intersection of technical judgment, delivery systems, and human capability.
                                </p>
                            </div>

                            <div className="space-y-1 font-semibold text-gray-700 dark:text-gray-200">
                                <p>📍 London, UK</p>
                                <p>
                                    🌐{" "}
                                    <Link
                                        href="https://www.jameshw.dev"
                                        className="text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        jameshw.dev
                                    </Link>{" "}
                                    ·{" "}
                                    <Link
                                        href="https://www.linkedin.com/in/jamesdhw"
                                        className="inline-flex items-center gap-1.5 text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <LinkedInIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <span>LinkedIn: /in/jamesdhw</span>
                                    </Link>{" "}
                                    ·{" "}
                                    <Link
                                        href="https://github.com/JamesDHW"
                                        className="inline-flex items-center gap-1.5 text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <GitHubIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <span>GitHub: JamesDHW</span>
                                    </Link>
                                </p>
                                <p className="flex flex-wrap items-center gap-2">
                                    <span>📧</span>
                                    <Link
                                        href="mailto:jameshaworthwheatman@gmail.com"
                                        className="inline-flex items-center gap-1.5 text-ice-800 dark:text-ice-400 hover:text-ice-800 dark:hover:text-ice-400"
                                    >
                                        <EnvelopeIcon className="w-5 h-5 flex-shrink-0 text-ice-800 dark:text-ice-400" />
                                        <span>jameshaworthwheatman@gmail.com</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </header>

                    <section className="mb-6 print:mb-4 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            Operator Summary
                        </h2>
                        <div className="space-y-3 text-gray-800 dark:text-gray-200">
                            <p>
                                I work with founders, teams, and organisations to turn ambiguous problems into reliable delivery.
                                <br />
                                My background spans hands-on engineering, technical leadership, and engineering management, primarily in regulated and data-intensive domains such as finance and insurance.
                            </p>
                            <p>
                                I specialise in creating the conditions for sustained progress: clear problem framing, sound technical decisions, fast feedback loops, and teams capable of operating independently.
                            </p>
                        </div>
                    </section>

                    <section className="mb-6 print:mb-4 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            What I Do
                        </h2>

                        <div className="space-y-4 text-gray-800 dark:text-gray-200">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">End-to-end ownership</h3>
                                <ul className="list-disc list-outside space-y-1 pl-5 mt-2">
                                    <li>Take responsibility from problem definition through delivery and long-term system health</li>
                                    <li>Balance speed, quality, and risk explicitly rather than optimising one at the expense of the others</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Technical &amp; delivery leadership</h3>
                                <ul className="list-disc list-outside space-y-1 pl-5 mt-2">
                                    <li>Design and evolve architectures for systems expected to change</li>
                                    <li>Lead migrations, greenfield builds, and technical resets</li>
                                    <li>Improve delivery predictability through tooling, process, and system design</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Decision-making under ambiguity</h3>
                                <ul className="list-disc list-outside space-y-1 pl-5 mt-2">
                                    <li>Surface constraints and root causes using Lean systems thinking</li>
                                    <li>Make tradeoffs explicit and revisitable</li>
                                    <li>Reduce organisational risk by improving feedback loops and clarity</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">People &amp; capability development</h3>
                                <ul className="list-disc list-outside space-y-1 pl-5 mt-2">
                                    <li>Coach engineers and Tech Leads into independent problem-solvers</li>
                                    <li>Build judgment, not dependency</li>
                                    <li>Create learning-safe environments where quality improves over time</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-6 print:mb-4 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            Selected Engagements &amp; Outcomes
                        </h2>

                        <div className="space-y-6 text-gray-800 dark:text-gray-200">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Asset Finance Platform — International Bank</h3>
                                <p className="mt-1"><span className="font-semibold">Role:</span> Engineering Manager / Tech Lead</p>

                                <div className="mt-3 space-y-3">
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">Context</p>
                                        <p>Legacy Groovy on Grails system with slow feedback loops and growing delivery risk in a regulated environment.</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">Decisions &amp; Actions</p>
                                        <ul className="list-disc list-outside space-y-1 pl-5 mt-1">
                                            <li>Led a migration to TypeScript and modern frontend tooling</li>
                                            <li>Reworked test and CI setup to prioritise fast, reliable feedback</li>
                                            <li>Owned technical direction while partnering closely with client stakeholders</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">Outcomes</p>
                                        <ul className="list-disc list-outside space-y-1 pl-5 mt-1">
                                            <li>~50% reduction in end-to-end test runtime</li>
                                            <li>Faster, more confident delivery with lower regression risk</li>
                                            <li>System positioned for long-term change rather than short-term patching</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Adobe Illustrator Extension — Fashion Retail</h3>
                                <p className="mt-1"><span className="font-semibold">Role:</span> Tech Lead</p>

                                <div className="mt-3 space-y-3">
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">Context</p>
                                        <p>Greenfield extension requiring tight integration between ExtendScript and modern APIs.</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">Decisions &amp; Actions</p>
                                        <ul className="list-disc list-outside space-y-1 pl-5 mt-1">
                                            <li>Designed overall system architecture and custom build pipeline</li>
                                            <li>Solved integration friction between legacy scripting and modern TypeScript tooling</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">Outcomes</p>
                                        <ul className="list-disc list-outside space-y-1 pl-5 mt-1">
                                            <li>Smooth developer experience and maintainable codebase</li>
                                            <li>Reduced ongoing development friction for the client team</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Terrorism Modelling &amp; Data Platform — International Insurance Broker</h3>
                                <p className="mt-1"><span className="font-semibold">Role:</span> Tech Lead</p>

                                <div className="mt-3 space-y-3">
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">Context</p>
                                        <p>Complex analytical platform modelling the impact of terrorist attacks on insurance risk.</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">Decisions &amp; Actions</p>
                                        <ul className="list-disc list-outside space-y-1 pl-5 mt-1">
                                            <li>Designed simulation and data-processing workflows</li>
                                            <li>Built geospatial data tooling (“GeoWizard”) for CSV ingestion and manipulation</li>
                                            <li>Worked closely with domain experts to ensure correctness and usability</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-gray-100">Outcomes</p>
                                        <ul className="list-disc list-outside space-y-1 pl-5 mt-1">
                                            <li>Delivered high-impact analytical capabilities used for real insurance decision-making</li>
                                            <li>Enabled non-technical users to work effectively with complex geospatial data</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-6 print:mb-4 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            How I Work
                        </h2>
                        <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 pl-5">
                            <li>Bias toward early value and fast feedback</li>
                            <li>Prefer clear ownership and explicit tradeoffs</li>
                            <li>Optimise for long-term maintainability, not novelty</li>
                            <li>Comfortable operating where requirements are incomplete and stakes are real</li>
                        </ul>
                    </section>

                    <section className="mb-6 print:mb-4 break-inside-avoid">
                        <h2 className="text-2xl font-bold mb-3 text-ice-800 dark:text-ice-400 border-b border-ice-800 dark:border-ice-400 pb-1">
                            Background
                        </h2>
                        <ul className="list-disc list-outside space-y-1 text-gray-800 dark:text-gray-200 pl-5">
                            <li>Engineering Manager — Theodo UK (2025–Present)</li>
                            <li>Tech Lead — Theodo UK (2022–2024)</li>
                            <li>Full-Stack Engineer — Theodo UK (2020–2022)</li>
                        </ul>
                        <p className="text-gray-800 dark:text-gray-200 mt-3">
                            Alongside formal roles, I coach engineers through weekly structured sessions focused on clarity, accountability, and sustainable growth.
                        </p>
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
