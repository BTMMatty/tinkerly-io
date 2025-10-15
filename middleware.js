import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { Logger } from './src/lib/logger';

const logger = new Logger({ env: process.env.NODE_ENV });

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/pricing',
  '/privacy',
  '/terms',
  '/blog(.*)',
  '/story',
  '/press',
  '/pioneering-pixies',
  '/api/webhook(.*)',
  '/api/public(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  try {
    if (isPublicRoute(req)) {
      return NextResponse.next();
    }
    await auth.protect();
    const response = NextResponse.next();
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Content-Security-Policy', "default-src 'self'; frame-ancestors 'none'");
    return response;
  } catch (error) {
    logger.error('Auth middleware failed', { url: req.url, error: error.message });
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};