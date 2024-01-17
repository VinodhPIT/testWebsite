const nextTranslate = require("next-translate-plugin");
const nextConfig = {
  images: {
    domains: ["storage.googleapis.com"],

    unoptimized: true,
  },
  env: {
    apiDomain: "https://admin.inckd.com/web/api",
    googlePlacesApiKey: "AIzaSyDo8sjdevbkqLGUx_DFpFlYlQFb1FpRAIo",
    LIVE_URL: "https://www.inckd.com",
  },

  i18n: {
    localeDetection: false,
    defaultLocale: "ch-en",
  },
};

module.exports = nextTranslate({
  webpack: (nextConfig) => {
    return { ...nextConfig, ...nextConfig };
  },
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/[locale]",
      },
    ];
  },
});
