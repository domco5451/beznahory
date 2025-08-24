// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

import compress from "astro-compress";

import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
  site: "https://beznahory.sk",
  base: "/",
  trailingSlash: "never",
  integrations: [
    mdx(),
    icon({
      include: {
        mdi: ["*"],
      },
    }),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],

  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  },
});
