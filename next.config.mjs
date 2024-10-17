/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This disables ESLint during production builds
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
