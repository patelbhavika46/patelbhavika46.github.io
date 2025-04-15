/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: isProd ? "/patelbhavika46.github.io" : "",
  assetPrefix: isProd ? "/patelbhavika46.github.io/" : "",
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
