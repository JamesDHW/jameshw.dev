export const BASE_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL !== undefined
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";