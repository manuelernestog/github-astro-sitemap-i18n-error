import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://demo.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US", // The `defaultLocale` value must present in `locales` keys
          fr: "fr-CA",
        },
      },
    }),
    astroI18next(),
  ],
});
