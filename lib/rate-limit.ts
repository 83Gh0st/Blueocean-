// A minimal in-memory, fixed-window rate limiter.
//
// Honest limitation: this state lives in one serverless function's memory,
// so it resets on a cold start and isn't shared across regions or
// concurrently-running instances. For a small internal tool used by a
// handful of trusted staff, that's still a real deterrent against naive,
// scripted password-guessing — it just isn't the kind of guarantee you'd
// want for a large-scale public login endpoint. If this ever needs to hold
// up against a serious, distributed attempt, swap this for a shared store
// (Upstash Redis is the usual pairing with Vercel) keyed the same way.

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

/** Drop expired buckets so this map can't grow without bound. */
function sweep(now: number) {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

/**
 * Returns { limited: false } if the request is allowed, incrementing the
 * counter for `key`. Returns { limited: true, retryAfterSeconds } once
 * `key` has made `max` requests within `windowMs`.
 */
export function checkRateLimit(key: string, max: number, windowMs: number) {
  const now = Date.now();
  if (buckets.size > 500) sweep(now);

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { limited: false as const };
  }

  if (bucket.count >= max) {
    return { limited: true as const, retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { limited: false as const };
}

/** Best-effort client identifier from the headers a proxy (Vercel) sets. */
export function clientKeyFromHeaders(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return headers.get("x-real-ip") ?? "unknown";
}
