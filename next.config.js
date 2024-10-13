/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.openweathermap.org"],
  },
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
    localeDetection: true,
  },
};

module.exports = nextConfig;
