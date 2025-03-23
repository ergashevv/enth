/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'localhost', 'your-domain.com'],
    unoptimized: true, // BARCHA next/image lar uchun
  },
  output: 'export',
};

export default nextConfig;
