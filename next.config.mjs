/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/2026-show-opportunities',
        destination: 'https://chance2.dance/2026-show-opportunities',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
