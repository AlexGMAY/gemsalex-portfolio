// import * as Sentry from "@sentry/nextjs";

// Sentry.init({
//   dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
//   // Adds request headers and IP for users, for more info visit:
//   // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
//   sendDefaultPii: true,
//   //  performance
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for tracing.
//   // We recommend adjusting this value in production
//   // Learn more at
//   // https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
//   tracesSampleRate: 1.0,
//   //  performance
//   integrations: [
//     //  session-replay
//     // Replay may only be enabled for the client-side
//     Sentry.replayIntegration(),
//     //  session-replay
//     //  user-feedback
//     Sentry.feedbackIntegration({
//       // Additional SDK configuration goes in here, for example:
//       colorScheme: "system",
//     }),
//     //  user-feedback
//   ],
//   //  session-replay
//   // Capture Replay for 10% of all sessions,
//   // plus for 100% of sessions with an error
//   // Learn more at
//   // https://docs.sentry.io/platforms/javascript/session-replay/configuration/#general-integration-configuration
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
//   //  session-replay
//   //  logs
//   // Enable logs to be sent to Sentry
//   enableLogs: true,
//   //  logs
//   // Note: if you want to override the automatic release value, do not set a
//   // `release` value here - use the environment variable `SENTRY_RELEASE`, so
//   // that it will also get attached to your source maps
// });
// // This export will instrument router navigations, and is only relevant if you enable tracing.
// // `captureRouterTransitionStart` is available from SDK version 9.12.0 onwards
// export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

// instrumentation-client.ts - OPTIMIZED SENTRY CONFIG
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Only enable in production
  enabled: process.env.NODE_ENV === 'production',
  
  // Disable in development to avoid noise
  debug: false,
  
  // PII - Keep but be aware
  sendDefaultPii: true,
  
  // ⚠️ CRITICAL FIX: Reduce traces sample rate from 1.0 to 0.1
  // 1.0 = 100% of transactions (WAY TOO HIGH - causes rate limits)
  // 0.1 = 10% of transactions (Much better)
  tracesSampleRate: 0.1,
  
  // Filter out noisy errors
  ignoreErrors: [
    'ResizeObserver loop',
    'Network request failed',
    'Failed to fetch',
    'Loading chunk',
    'Non-Error promise rejection',
    '429',
    'Too Many Requests',
    'Request aborted',
    'Canceled',
    'NetworkError',
    'ECONNABORTED',
    /.*\.js\.map.*/i,
    /timeout/i,
    /Network Error/i,
    /AbortError/i,
  ],
  
  // Deny URLs that shouldn't be reported
  denyUrls: [
    /localhost/,
    /127\.0\.0\.1/,
    /\.js\.map/,
    /__nextjs/,
    /webpack/,
  ],
  
  integrations: [
    // Session Replay - Keep but with sampling
    Sentry.replayIntegration({
      // Mask sensitive data
      maskAllText: true,
      blockAllMedia: true,
      // Reduce quality slightly to save bandwidth
      // quality: 'low',
    }),
    
    // User Feedback - Keep
    Sentry.feedbackIntegration({
      colorScheme: "system",
      // Only show in production
      isDisabled: process.env.NODE_ENV !== 'production',
    }),
  ],
  
  // Session Replay - Reduced sampling
  // 0.1 = 10% of sessions (down from 10%)
  replaysSessionSampleRate: 0.05, // Even lower to save quota
  
  // 0.5 = 50% of sessions with errors (down from 100%)
  replaysOnErrorSampleRate: 0.5,
  
  // Logs - Consider disabling to save quota
  enableLogs: false,
  
  // Add beforeSend to filter even more
  beforeSend(event) {
    // Don't send errors from localhost
    if (typeof window !== 'undefined' && 
        (window.location.hostname === 'localhost' || 
         window.location.hostname === '127.0.0.1')) {
      return null;
    }
    
    // Don't send 429 errors
    if (event.exception?.values?.[0]?.value?.includes('429') ||
        event.exception?.values?.[0]?.value?.includes('Too Many Requests')) {
      return null;
    }
    
    // Don't send source map errors
    if (event.exception?.values?.[0]?.value?.includes('.js.map')) {
      return null;
    }
    
    // Don't send ipapi errors
    if (event.request?.url?.includes('ipapi.co') ||
        event.exception?.values?.[0]?.value?.includes('ipapi')) {
      return null;
    }
    
    return event;
  },
  
  // Add beforeSendTransaction for transactions
  beforeSendTransaction(event) {
    // Don't send transactions for health checks or static assets
    if (event.request?.url?.includes('/api/health') ||
        event.request?.url?.includes('.js') ||
        event.request?.url?.includes('.css')) {
      return null;
    }
    return event;
  },
});

// Export router transition tracking
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;