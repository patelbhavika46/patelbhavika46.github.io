/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
    unoptimized: true, // Important for static export!
  },
  // output: "export", // Enables static export for GitHub Pages
  assetPrefix: isProd ? "/patelbhavika46.github.io/" : "",
  basePath: isProd ? "/patelbhavika46.github.io" : "",
};
