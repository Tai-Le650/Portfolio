const FALLBACK_ORIGIN = "http://localhost:3000";

/**
 * Normalises an environment value into an absolute origin, or returns undefined
 * when it is absent, blank, or unparseable — so the caller falls through to the
 * next source rather than propagating a value that would throw downstream.
 *
 * A key set to an empty string is the case that matters: `??` treats "" as
 * present, which previously reached `new URL("")` and failed the whole build.
 */
function toOrigin(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;

  // Vercel's system variables are bare hostnames, with no protocol.
  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    // .origin also drops any path, query, or trailing slash.
    return new URL(candidate).origin;
  } catch {
    return undefined;
  }
}

export const siteUrl =
  toOrigin(process.env.NEXT_PUBLIC_SITE_URL) ??
  toOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  toOrigin(process.env.VERCEL_URL) ??
  FALLBACK_ORIGIN;
