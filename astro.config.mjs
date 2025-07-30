// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

import { remarkReadingTime } from './plugins/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), icon({
    include: {
      mdi: ["*"],
    }
  })],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});