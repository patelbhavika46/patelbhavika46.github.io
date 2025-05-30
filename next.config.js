/** @type {import('next').NextConfig} */
if (process.env.NODE_ENV === "production") {
  console.log("You're in production mode!");
}
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // basePath: "/patelbhavika46.github.io",
  // assetPrefix: "/patelbhavika46.github.io",
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
