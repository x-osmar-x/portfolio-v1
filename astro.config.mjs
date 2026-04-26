// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
// https://astro.build/config
export default defineConfig({
  site: 'https://x-osmar-x.github.io',
  base: '/portfolio-v1',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  adapter: node({
    mode: 'standalone'
  }),
});