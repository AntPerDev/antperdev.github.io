import type { AstroGlobal } from 'astro';

/**
 * Middleware that adds a set of security‑related HTTP headers to every response.
 * All headers comply with the `secure‑clean‑code` policy (no sensitive data in URLs,
 * sanitization, hardening against XSS, CSRF, etc.).
 */
export async function handle({ request, response }: AstroGlobal) {
  // Content Security Policy – adjust sources as needed for your assets.
  const csp = [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Let Astro continue processing the request.
  return response;
}
