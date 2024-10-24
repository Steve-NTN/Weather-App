/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.openweathermap.org", "flagcdn.com"],
  },
  i18n,
  trailingSlash: false,
};

module.exports = nextConfig;
