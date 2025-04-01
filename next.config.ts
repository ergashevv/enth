/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'localhost', 'your-domain.com'],
    unoptimized: true, 
  },
  output: 'export',
};

export default nextConfig;
