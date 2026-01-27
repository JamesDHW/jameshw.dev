import Link from "next/link";

import { ArrowRightIcon } from "icons/arrow-right";
import { CalendarIcon } from "icons/calendar";

import {

    OFFERINGS,
    PROCESS_STEPS,
    PROOF_LINKS,
    TRUST_METRICS,
} from "./content";
import { Caret } from "components/Common/TypewriterEffect/TypewriterEffect";
import classNames from "classnames";


const PROOF_LINK_CLASSES =
    "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 hover:ring-1 ring-gray-300 transition-all";

export default function WorkWithMePage() {
    return (
        <div className="flex flex-col px-8">
            <h1 className={classNames(
                "sticky top-20 py-2 z-40 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-base sm:text-5xl font-bold my-20",
                "after:absolute after:-start-5 after:h-5 after:w-full after:-bottom-5 after:bg-gradient-to-b after:dark:from-gray-900 after:dark:to-transparent after:from-white after:to-transparent")}>
                Senior <span className="text-ice-800"> Engineering Leadership </span> for Founders and Growing Teams.<Caret /></h1>
            <div className="max-w-3xl ml-4">
                <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg my-16">
                    I help you reduce technical risk, move faster, and build systems that scale <br /> without burning out the team.
                </p>
            </div>

            <section className="mt-10 space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Previous Work</h2>
                </div>

                <div className="flex flex-wrap gap-3">
                    {PROOF_LINKS.map(({ label, href }) => {
                        return (
                            <Link key={href} href={href} className={PROOF_LINK_CLASSES}>
                                {label} <ArrowRightIcon className="h-4 w-4" />
                            </Link>
                        );
                    })}
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    {TRUST_METRICS.map(({ value, label }) => {
                        return (
                            <div
                                key={value}
                                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 shadow-sm"
                            >
                                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{value}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
                            </div>
                        );
                    })}
                </div>
            </section>


            <section className="mt-10 space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Offerings</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Choose the level of support that matches your stage and urgency.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {OFFERINGS.map(({ highlight, name, summary, bestFor, timeframe, href }) => {
                        return (
                            <Link
                                key={href}
                                href={href}
                                className="group relative rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                                    <CalendarIcon className="h-4 w-4" />
                                    <span>{timeframe}</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="space-y-1">
                                        <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-ice-800">
                                            {highlight}
                                        </p>
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                            {name}
                                        </h3>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-base font-semibold text-gray-700 dark:text-gray-300">
                                            {summary}
                                        </p>
                                        <p className="text-base text-gray-600 dark:text-gray-400">
                                            Best for: {bestFor}
                                        </p>
                                    </div>
                                </div>
                                <span className="w-full mt-3 inline-flex items-center justify-end text-sm font-semibold text-gray-900 dark:text-gray-100">
                                    View details <ArrowRightIcon className="h-4 w-4 ml-2" />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="mt-10 space-y-4">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">How it works</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        A simple engagement flow that keeps decisions clear and delivery steady.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {PROCESS_STEPS.map(({ title, summary }, index) => {
                        return (
                            <div
                                key={title}
                                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-sm"
                            >
                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                    Step {index + 1}
                                </p>
                                <h3 className="mt-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                                    {title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{summary}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
