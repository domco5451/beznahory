// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

import tailwindcss from "@tailwindcss/vite";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://beznahory.sk",
  base: "/",
  trailingSlash: "never",
  integrations: [
    react(),
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
    plugins: [tailwindcss()],
  },
});
