// ========================================================================
// Sitemap Generation Script
// ========================================================================
//
//1. Run the command: `npm run generate-sitemap` to generate the sitemap.xml file.
//2. The `/journal` menu is available for certain locales (currently 'gb-en' and 'de-de').
//3. In `/journal` page we have listed some lading pages  based on locale  'gb-en' and 'de-de'they are added in (customUrls) array .Refer the  below code....
//5. In the future, if  we have new landing pages then we need to  include them inside customUrls array.
//6. If we creating a new page that url need to be added in the Url's array .Refer the code below..
//7. Currently we  have urls based on the translations .For example if we switch to german the url will change to german 
//8. Currently we have (en,de,it ,es)locales
//9. We specify the translated Url's for (ch-de, au-de, de-de ,es-es)---- > Refer Below code
//10.Update the transalted Url's when we adding new page 
//11.Once added run the script and update the new sitemap to Google-Console.
//12.The generated sitemap will be updated inside the(PUBLIC FOLDER)

const fs = require('fs');
const path = require('path');

// Load the i18n.json file
const i18JsonPath = path.join(__dirname, './i18n.json');
let i18Data;
try {
  i18Data = JSON.parse(fs.readFileSync(i18JsonPath, 'utf8'));
} catch (error) {
  process.exit(1);
}

const locales = i18Data.locales;
const excludeLocales = ["de-de", "es-es", "ch-de", "au-de"]; // Locales to exclude from general URLs since they have different url paths
const baseUrl = 'https://inckd.com';

//URLs  need to include for the locales since they are all ---- > (en)
const Urls = [
  "/",
  "/tattoo-financing",
  "/for-tattoo-artists",
  "/tattoo-request",
  "/tattoo-request-form",
  "/contact",
  "/faq",
  "/explore/tattoo-artists",
  "/explore/tattoos",
  "/explore/flash-tattoos",
];

// Specific URLs for es-es locale
const esEsUrls = [
    "/",
  "/solicitud-de-tatuaje",
  "/formulario-solicitud-de-tatuaje",
  "/financiacion-de-tatuajes",
  "/explorar/negocio-de-tatuajes",
  "/contacto",
  "/explorar/tatuadores",
  "/explorar/flash-tatuajes",
  "/explorar/tatuajes",
  "/explorar/todos",
  "/faq",
];

// URLs for locales that use the same paths but different locales (ch-de, au-de, de-de)
const commonUrls = [
    "/",
  "/tattoo-anfrage",
  "/tattoo-anfrage-formular",
  "/tattoofinanzierung",
  "/tattoo-business",
  "/kontakt",
  "/entdecke/alle",
  "/entdecke/tattoos",
  "/entdecke/tätowierer",
  "/entdecke/flash-tattoos",
  "/faq",
];

// URLs with low priority
const priorityLow = [
  "/contact",
  "/faq",
  "/contacto",
  "/kontakt",
];

// SpecificPath available for some countries currently avaibale for (gb-en & de-de)
const specificPath = {
    "/journal": ["de-de", "gb-en"],
  };


// Specific paths for the landing pages
    const customUrls = [
    { path: "/find-the-best-tattooShops-near-me", locale: "gb-en", priority: "0.70" },
    { path: "/book-tattoo-artists", locale: "gb-en", priority: "0.70" },
    { path: "/tattoo-after-care", locale: "gb-en", priority: "0.70" },
    { path: "/exploring-tattoo-ideas-for-men", locale: "gb-en", priority: "0.70" },

    { path: "/cover-up-tattoos", locale: "de-de", priority: "0.70" },
    { path: "/tattoo-ideen", locale: "de-de", priority: "0.70" },
    { path: "/tattoos-fur-frauen", locale: "de-de", priority: "0.64" },
    { path: "/tattoo-Pflege", locale: "de-de", priority: "0.70" },
    { path: "/drachen-tattoos", locale: "de-de", priority: "0.70" },
  ];


const generateSitemap = () => {
  let sitemap = [`<?xml version="1.0" encoding="UTF-8"?>`];
  sitemap.push(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);

  locales.forEach(locale => {
    if (!excludeLocales.includes(locale)) {
      // Include general URLs for non-excluded locales
      Urls.forEach(path => {
        let priority = path === '/' ? '1.0' : (priorityLow.includes(path) ? '0.3' : '0.8');
        sitemap.push(`  <url>`);
        sitemap.push(`    <loc>${baseUrl}/${locale}${path}</loc>`);
        sitemap.push(`    <lastmod>${new Date().toISOString()}</lastmod>`);
        sitemap.push(`    <priority>${priority}</priority>`);
        sitemap.push(`  </url>`);
      });
    }

    // Specific URLs for es-es
    if (locale === 'es-es') {
      esEsUrls.forEach(path => {
        let priority = path === '/' ? '1.0' : (priorityLow.includes(path) ? '0.4' : '0.8');
        sitemap.push(`  <url>`);
        sitemap.push(`    <loc>${baseUrl}/${locale}${path}</loc>`);
        sitemap.push(`    <lastmod>${new Date().toISOString()}</lastmod>`);
        sitemap.push(`    <priority>${priority}</priority>`);
        sitemap.push(`  </url>`);
      });
    }

    // Common URLs for locales that have the same paths (ch-de, au-de, de-de)
    if (["de-de", "ch-de", "au-de"].includes(locale)) {
      commonUrls.forEach(path => {
        let priority = path === '/' ? '1.0' : (priorityLow.includes(path) ? '0.4' : '0.8');
        sitemap.push(`  <url>`);
        sitemap.push(`    <loc>${baseUrl}/${locale}${path}</loc>`);
        sitemap.push(`    <lastmod>${new Date().toISOString()}</lastmod>`);
        sitemap.push(`    <priority>${priority}</priority>`);
        sitemap.push(`  </url>`);
      });
    }

   Object.keys(specificPath).forEach(path => {
    if (specificPath[path].includes(locale)) {
      let priority ="0.6";
      sitemap.push(`  <url>`);
      sitemap.push(`    <loc>${baseUrl}/${locale}${path}</loc>`);
      sitemap.push(`    <lastmod>${new Date().toISOString()}</lastmod>`);
      sitemap.push(`    <priority>${priority}</priority>`);
      sitemap.push(`  </url>`);
    }
  });

 // Specific paths for certain locales with custom priorities
 customUrls.forEach(({ path, locale: specificLocale, priority }) => {
    if (locale === specificLocale) {
      sitemap.push(`  <url>`);
      sitemap.push(`    <loc>${baseUrl}/${locale}${path}</loc>`);
      sitemap.push(`    <lastmod>${new Date().toISOString()}</lastmod>`);
      sitemap.push(`    <priority>${priority}</priority>`);
      sitemap.push(`  </url>`);
    }
  });

  });

  sitemap.push(`</urlset>`);
  return sitemap.join('\n');
};
// Write the sitemap to a file
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), generateSitemap());


// ========================================================================
// Sitemap Generation End's 
// ========================================================================