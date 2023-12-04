const nextTranslate = require("next-translate-plugin");
const nextConfig = {
  images: {
    domains: ["storage.googleapis.com"],
  },
  env: {
    apiDomain:"https://admin.inckd.com/web/api",
    googlePlacesApiKey:"AIzaSyDo8sjdevbkqLGUx_DFpFlYlQFb1FpRAIo",
    NEXT_PUBLIC_BASE_URL:process.env.NEXT_PUBLIC_BASE_URL || "https://inckdweb2023.vercel.app"
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
