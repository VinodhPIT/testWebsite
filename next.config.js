const nextTranslate = require("next-translate-plugin");


// const generateRewrites = () => {
//   const rewrites = [];

//   Object.keys(pathTranslations).forEach((originalPath) => {
//     const translations = pathTranslations[originalPath];
//     Object.keys(translations).forEach((locale) => {
//       rewrites.push({
//         source: `/${locale}${translations[locale]}`,
//         destination: `${originalPath}?locale=${locale}`,
//       });
//     });
//   });

//   return rewrites;
// };

const nextConfig = {
  images: {
    domains: ["storage.googleapis.com"],
    unoptimized: true,
  },
  env: {
    apiDomain: 
       "https://admin.inckd.com",
   
    LIVE_URL: "https://inckd.dev.displayme.net",
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
        source: "/tattoo-financing",
        destination: "/tattoo-financing",
      },
      {
        source: "/tattoofinanzierung",
        destination: "/tattoo-financing",
       
      },
      {
        source: "/financiacion-de-tatuajes",
        destination: "/tattoo-financing",
      },

      {
        source: "/for-tattoo-artists",
        destination: "/for-tattoo-artists",
      },
      {
        source: "/tattoo-business",
        destination: "/for-tattoo-artists",
      },
      {
        source: "/explorar/negocio-de-tatuajes",
        destination: "/for-tattoo-artists",
      },

      {
        source: "/tattoo-request",
        destination: "/tattoo-request",
      },
      {
        source: "/tattoo-anfrage",
        destination: "/tattoo-request",
      },
      {
        source: "/solicitud-de-tatuaje",
        destination: "/tattoo-request",
      },

      {
        source: "/tattoo-request-form",
        destination: "/tattoo-request-form",
      },
      {
        source: "/tattoo-anfrage-formular",
        destination: "/tattoo-request-form",
      },
      {
        source: "/formulario-solicitud-de-tatuaje",
        destination: "/tattoo-request-form",
      },

      {
        source: "/contact",
        destination: "/contact",
      },
      {
        source: "/kontakt",
        destination: "/contact",
      },
      {
        source: "/contacto",
        destination: "/contact",
      },

      {
        source: "/explore/all",
        destination: "/explore/all",
      },
      {
        source: "/entdecke/alle",
        destination: "/explore/all",
      },
      {
        source: "/explorar/todos",
        destination: "/explore/all",
      },

      {
        source: "/explore/tattoos",
        destination: "/explore/tattoos",
      },
      {
        source: "/entdecke/tattoos",
        destination: "/explore/tattoos",
      },
      {
        source: "/explorar/tatuajes",
        destination: "/explore/tattoos",
      },

      {
        source: "/explore/flash-tattoos",
        destination: "/explore/flash-tattoos",
      },
      {
        source: "/entdecke/flash-tattoos",
        destination: "/explore/flash-tattoos",
      },
      {
        source: "/explorar/flash-tatuajes",
        destination: "/explore/flash-tattoos",
      },

      {
        source: "/explore/tattoo-artists",
        destination: "/explore/tattoo-artists",
      },
      {
        source: "/entdecke/t%C3%A4towierer",
        destination: "/explore/tattoo-artists",
      },
      {
        source: "/explorar/tatuadores",
        destination: "/explore/tattoo-artists",
      },

      // {
      //   source: '/entdecke/tattoos/:slug*',
      //   destination: '/explore/tattoos/:slug*',
      // },

      {
        source: "/explore/tattoos/:slug*",
        destination: "/explore/tattoos/:slug*",
      },
      {
        source: "/entdecke/tattoos/:slug*",
        destination: "/explore/tattoos/:slug*",
      },


      {
        source: "/entdecke/tattoos/:slug*",
        destination: "/explore/tattoos/:slug*",
      },

      {
        source: "/explorar/tatuajes/:slug*",
        destination: "/explore/tattoos/:slug*",
      },

      {
        source: "/entdecke/flash-tattoos/:slug*",
        destination: "/explore/flash-tattoos/:slug*",
      },

      {
        source: "/explorar/flash-tatuajes/:slug*",
        destination: "/explore/flash-tattoos/:slug*",
      },
    ];
  },
});
