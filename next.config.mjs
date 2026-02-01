import {withSentryConfig} from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  transpilePackages: [], // Remove any unnecessary transpilations
  experimental: {
    // 1. Optimise l'extraction CSS (réduit les chunks CSS)
    optimizeCss: true,
    esmExternals: 'loose',
    
    // 2. Optimise les packages pour réduire les chunks JS
    optimizePackageImports: [
      'lucide-react', // Si utilisé - regroupe les icônes
      'framer-motion', // Optimise les bundles d'animation     
      'react-icons', // If using
      '@radix-ui/react-icons', // If usin 
    ],
    
    // 3. Scroll restoration pour UX
    scrollRestoration: true,
    // nextScriptWorkers: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache agressif
    // Fix for development
    unoptimized: process.env.NODE_ENV === 'development',    
  },  

  /* Headers optimisés pour la performance */
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
      // Cache agressif pour les assets statiques
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

  /* Compression */
  compress: true,
  
  // Remove experimental options for now
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  webpack: (config, { isServer, dev }) => {
    // Split chunks more aggressively
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 25,
      minSize: 20000,
      cacheGroups: {
        default: false,
        vendors: false,
        framework: {
          name: 'framework',
          test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
          priority: 40,
          chunks: 'all',
        },
        lib: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
            return match ? `npm.${match[1].replace('@', '')}` : null;
          },
          priority: 30,
          minChunks: 1,
          reuseExistingChunk: true,
        },
      },
    };
    
    return config;
  },
  
  // FIX: Enable source maps for debugging
  productionBrowserSourceMaps: true,
};

// Modified Sentry config to include source maps
export default withSentryConfig(nextConfig, {
  silent: true,
  org: "marvelbiz-solutions",
  project: "portfolio-nextjs",
}, {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  // FIX: Show source maps for debugging
  hideSourceMaps: false,
  disableLogger: true,
  automaticVercelMonitors: true,
  
  // Optional: Upload source maps to Sentry for production debugging
  sourcemaps: {
    uploadSourceMapsToSentry: true,
  },
});
