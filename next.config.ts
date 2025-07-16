import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {

        protocol: 'https',
        hostname: 'thumbnail.laftel.net',
        port: '',
        pathname: '/items/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
