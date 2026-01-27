import { PATHS } from "app/constants";

export const PROOF_LINKS = [
    { label: "Projects", href: PATHS.EXPERIENCE },
    { label: "Tech Stacks", href: PATHS.TECH },
    { label: "Resume", href: PATHS.RESUME },
    { label: "Writing", href: PATHS.BLOG },
] as const;

export const TRUST_METRICS = [
    {
        value: "5+ Years",
        label: "Helping founders and small teams deliver sustainably.",
    },
    {
        value: "15+ Clients",
        label: "Across fintech, retail, insurance, and med-tech.",
    },
    {
        value: "EM / Tech Lead / Coach",
        label: "Hands-on leadership across strategy and delivery.",
    },
] as const;


export const PROCESS_STEPS = [
    {
        title: "Consult",
        summary: "Free consultation to diagnose the challenges facing you and your team.",
    },
    {
        title: "Approach",
        summary: "Agree a plan and timeline for the engagement that suites your needs.",
    },
    {
        title: "Engage",
        summary: "Deliver the agreed outcomes.",
    },
] as const;

export const OFFERINGS = [
    {
        highlight: "Validate",
        name: "Technical Direction & Risk Review",
        summary:
            "Short, focused engagement to identify technical risks and clarify next steps.",
        bestFor: "Founders who need clarity before scaling or fundraising.",
        timeframe: "1-2 weeks",
        href: `${PATHS.WORK_WITH_ME}/technical-direction`,
    },
    {
        highlight: "Support",
        name: "Ongoing Technical Coaching",
        summary:
            "Regular, lightweight support for founders and early technical leaders.",
        bestFor: "Leaders who want ongoing decision support and accountability.",
        timeframe: "Weekly or bi-weekly",
        href: `${PATHS.WORK_WITH_ME}/coaching`,
    },
    {
        highlight: "Deliver",
        name: "Fractional Engineering Leadership",
        summary:
            "Temporary senior leadership during periods of transition or growth.",
        bestFor: "Teams between leads or scaling without senior oversight.",
        timeframe: "1-3 months",
        href: `${PATHS.WORK_WITH_ME}/fractional-leadership`,
    },
] as const;
