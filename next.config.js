/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com'],
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: '/screenshots',
        destination: '/#screenshots',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 