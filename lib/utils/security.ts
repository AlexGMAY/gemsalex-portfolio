import { randomBytes } from "crypto";

// Rate limiting storage (in production, use Redis)
const rateLimitStore = new Map<string, number[]>();

export function generateCsrfToken(): string {
  return randomBytes(32).toString("hex");
}

export function validateCsrfToken(
  token: string,
  storedToken: string | undefined
): boolean {
  return !!token && !!storedToken && token === storedToken;
}

export function checkRateLimit(
  identifier: string,
  windowMs: number = 15 * 60 * 1000,
  maxRequests: number = 5
): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;

  if (!rateLimitStore.has(identifier)) {
    rateLimitStore.set(identifier, []);
  }

  const requests = rateLimitStore
    .get(identifier)!
    .filter((time) => time > windowStart);
  rateLimitStore.set(identifier, requests);

  if (requests.length >= maxRequests) {
    return false;
  }

  requests.push(now);
  return true;
}

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [identifier, requests] of rateLimitStore.entries()) {
    const validRequests = requests.filter((time) => now - time < 3600000); // Keep for 1 hour
    if (validRequests.length === 0) {
      rateLimitStore.delete(identifier);
    } else {
      rateLimitStore.set(identifier, validRequests);
    }
  }
}, 60000); // Run every minute
