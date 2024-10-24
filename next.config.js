// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    NATIVE_URL: process.env.NATIVE_URL,
    JOB_API_URL: process.env.JOB_API_URL,
  },
};
