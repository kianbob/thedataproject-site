/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/articles/still-billing-still-free',
        destination: '/articles',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
