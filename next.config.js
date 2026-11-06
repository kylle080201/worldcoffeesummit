/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "worldcoffeealliance.com",
      },
      {
        protocol: "https",
        hostname: "wocofco.org",
      },
      {
        protocol: "https",
        hostname: "softtechs360.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.bwbx.io",
      },
      {
        protocol: "https",
        hostname: "www.reuters.com",
      },
      {
        protocol: "https",
        hostname: "www.africaintelligence.com",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  async redirects() {
    return [
      { source: '/faq', destination: '/', permanent: false },
      { source: '/resources', destination: '/', permanent: false },
      { source: '/resources/:path*', destination: '/', permanent: false },
      // Registration closed: send the ticket page to the Register Interest form.
      // Only the exact /register path, so /register/success etc. (Stripe return URLs) keep working.
      { source: '/register', destination: '/interest', permanent: false },
    ];
  },
};

module.exports = nextConfig;
