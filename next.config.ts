import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'thecaninegym.com' }],
        destination: 'https://www.thecaninegym.com/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;