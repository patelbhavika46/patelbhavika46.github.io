/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export", // Add this line
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
