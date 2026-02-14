// import { withSentryConfig } from '@sentry/nextjs';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
  
  
//   experimental: {
//     optimizeCss: true,
//     scrollRestoration: true    
//   },

//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         port: '',
//         pathname: '/**',
//       },      
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//         port: '',
//         pathname: '/**',
//       }
//     ],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     minimumCacheTTL: 60,
//     unoptimized: process.env.NODE_ENV === 'development',
//   },

//   /* Headers optimisés pour la performance */
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'X-DNS-Prefetch-Control',
//             value: 'on',
//           },
//           {
//             key: 'X-Frame-Options',
//             value: 'SAMEORIGIN',
//           },
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff',
//           },
//           {
//             key: 'Referrer-Policy',
//             value: 'strict-origin-when-cross-origin',
//           },
//         ],
//       },
//       {
//         source: '/_next/static/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//       {
//         source: '/(.*).(jpg|jpeg|png|gif|ico|webp|avif|svg)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//       {
//         source: '/(.*).(woff2|woff|ttf)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//     ];
//   },

//   compress: true,
//   swcMinify: true,
  
//   compiler: {
//     removeConsole: process.env.NODE_ENV === 'production',
//   },

//   productionBrowserSourceMaps: true,
// };


// export default withSentryConfig(
//   nextConfig,
//   {
//     silent: true,
//     org: "marvelbiz-solutions",
//     project: "portfolio-nextjs",
//   },
//   {
//     widenClientFileUpload: true,
//     transpileClientSDK: true,
//     hideSourceMaps: true, // Keep hidden to avoid issues
//     disableLogger: true,
//     automaticVercelMonitors: true,
    
//     // Add these for safety
//     tunnelRoute: '/monitoring-tunnel',
    
//     // Disable automatic source map upload
//     sourcemaps: {
//       disable: true,
//     },
//   }
// );

// next.config.mjs - UPDATED with all fixes
import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    // Add this to improve performance
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },      
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: process.env.NODE_ENV === 'development',
    // Enable AVIF for better compression
    formats: ['image/avif', 'image/webp'],
  },

  // FIX THE SOURCE MAP ISSUE - This is the key!
  productionBrowserSourceMaps: false, // Set to false to prevent 404s
  
  // Better compression
  compress: true,
  swcMinify: true,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // Keep errors and warnings
    } : false,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).(jpg|jpeg|png|gif|ico|webp|avif|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).(woff2|woff|ttf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

// Sentry configuration - OPTIMIZED
export default withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options
    silent: true, // Suppresses all logs
    org: "marvelbiz-solutions",
    project: "portfolio-nextjs",
    
    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,
    
    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",
    
    // Hides source maps from generated client bundles
    hideSourceMaps: false, // Set to false to properly handle source maps
    
    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
    
    // Enables automatic instrumentation of Vercel Cron Monitors
    automaticVercelMonitors: true,
    
    // Disable source map upload in development
    dryRun: process.env.NODE_ENV === 'development',
  },
  {
    // Set sampling rates to avoid hitting limits
    tracesSampleRate: 0.1, // Capture 10% of transactions
    replaysSessionSampleRate: 0.1, // Capture 10% of sessions
    replaysOnErrorSampleRate: 0.5, // Capture 50% of errors
    
    // Ignore common errors
    ignoreErrors: [
      'ResizeObserver loop',
      'Network request failed',
      'Failed to fetch',
      'Loading chunk',
      'Non-Error promise rejection',
      '429',
      'Too Many Requests',
    ],
    
    // Filter before sending
    beforeSend(event) {
      // Don't send 429 errors
      if (event.exception?.values?.[0]?.value?.includes('429') ||
          event.exception?.values?.[0]?.value?.includes('Too Many Requests')) {
        return null;
      }
      
      // Don't send source map errors
      if (event.exception?.values?.[0]?.value?.includes('.js.map')) {
        return null;
      }
      
      return event;
    },
  }
);
