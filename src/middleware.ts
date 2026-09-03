import { defineMiddleware } from 'astro:middleware';

/**
 * Astro middleware to set security-related HTTP headers.
 * Calls the next handler to obtain a Response, then augments it.
 */
export const onRequest = defineMiddleware(async (_context, next) => {
  // Execute downstream middleware / page rendering and obtain the response.
  const response = await next();

  // Content Security Policy – adjust sources as needed.
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

  return response;
});
