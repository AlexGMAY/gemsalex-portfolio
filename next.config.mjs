import {withSentryConfig} from '@sentry/nextjs';
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['res.cloudinary.com'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
//   experimental: {
//     serverComponentsExternalPackages: ['cloudinary'],
//     optimizeCss: true,
//   },
//   // Reduce memory usage
//   swcMinify: true,
//   compress: true,  
//   compiler: {
//     removeConsole: process.env.NODE_ENV === 'production',
//   },
//   productionBrowserSourceMaps: false,
//   // Disable image optimization in development to avoid the fetch error
//   ...(process.env.NODE_ENV === 'development' && {
//     images: {
//       unoptimized: false
//     }
//   })
// };


// export default withSentryConfig(nextConfig, {
// // For all available options, see:
// // https://github.com/getsentry/sentry-webpack-plugin#options

// // Suppresses source map uploading logs during build
// silent: true, // !process.env.CI
// org: "marvelbiz-solutions",
// project: "portfolio-nextjs",
// }, {
// // For all available options, see:
// // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// // Upload a larger set of source maps for prettier stack traces (increases build time)
// widenClientFileUpload: true,

// // Transpiles SDK to be compatible with IE11 (increases bundle size)
// transpileClientSDK: true,

// // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// // This can increase your server load as well as your hosting bill.
// // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// // side errors will fail.
// // tunnelRoute: "/monitoring",

// // Hides source maps from generated client bundles
// hideSourceMaps: true,

// // Automatically tree-shake Sentry logger statements to reduce bundle size
// disableLogger: true,

// // Enables automatic instrumentation of Vercel Cron Monitors.
// // See the following for more information:
// // https://docs.sentry.io/product/crons/
// // https://vercel.com/docs/cron-jobs
// automaticVercelMonitors: true,
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Fix for development
    unoptimized: process.env.NODE_ENV === 'development',
  },  
  // Remove experimental options for now
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  productionBrowserSourceMaps: false,
};

// Temporarily disable Sentry to test if it's causing memory issues
export default withSentryConfig(nextConfig, {
  silent: true,
  org: "marvelbiz-solutions",
  project: "portfolio-nextjs",
}, {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
