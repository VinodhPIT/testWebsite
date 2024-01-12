const nextTranslate = require("next-translate-plugin");
const nextConfig = {
  images: {
    domains: ["storage.googleapis.com"],
  },
  env: {
    apiDomain:"https://apiadmin.inckd.com/web/api",
    googlePlacesApiKey:"AIzaSyDo8sjdevbkqLGUx_DFpFlYlQFb1FpRAIo",
    NEXT_PUBLIC_BASE_URL: "https://www.inckd.com",
    LIVE_URL: "https://www.inckd.com"
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
        source: '/',
        destination: '/[locale]',
      },
    ];
  },
});
