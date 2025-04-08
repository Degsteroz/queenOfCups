import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dtecpsig5/image/upload/q_auto:good/v1744074304/queen/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
