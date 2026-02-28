import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import alpine from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";
import { mkdir, readdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

export default defineConfig({
  site: "https://tg-bot-sdk.website",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    {
      name: "flatten-sitemap",
      hooks: {
        "astro:build:done": async ({ dir }) => {
          // Move sitemap into sitemap/ subdirectory
          const sitemapDir = new URL("sitemap/", dir);
          await mkdir(sitemapDir, { recursive: true });
          await unlink(new URL("sitemap-index.xml", dir));
          await rename(new URL("sitemap-0.xml", dir), new URL("sitemap/sitemap.xml", dir));

          // Replace sitemap-index.xml -> sitemap/sitemap.xml in all HTML files
          const dirPath = fileURLToPath(dir);
          const replaceInDir = async (currentDir: string) => {
            for (const entry of await readdir(currentDir, { withFileTypes: true })) {
              const fullPath = join(currentDir, entry.name);
              if (entry.isDirectory()) {
                await replaceInDir(fullPath);
              } else if (entry.name.endsWith(".html")) {
                const content = await readFile(fullPath, "utf-8");
                if (content.includes("sitemap-index.xml")) {
                  await writeFile(fullPath, content.replaceAll("sitemap-index.xml", "sitemap/sitemap.xml"));
                }
              }
            }
          };
          await replaceInDir(dirPath);
        },
      },
    },
    alpine({ entrypoint: "/src/alpine-entrypoint" }),
    starlight({
      title: "Telegram Bot SDK",
      logo: {
        src: "./src/assets/logo.svg",
        alt: "Telegram Bot SDK",
      },
      social: {
        github: "https://github.com/kondaurovDev/tg-bot-sdk",
      },
      components: {
        SocialIcons: "./src/components/SocialIcons.astro",
        PageTitle: "./src/components/PageTitle.astro",
      },
      head: [
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-1Y8J143871",
          },
        },
        {
          tag: "script",
          content: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-1Y8J143871');`,
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://tg-bot-sdk.website/og-banner.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "website",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "Telegram Bot SDK",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
      ],
      favicon: "/favicon.svg",
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "How to Use Client", slug: "client/usage" },
            { label: "How to Write Bots", slug: "bot-runner/writing-bots" },
            { label: "How to Run Bots", slug: "bot-runner/running-bots" },
            { label: "Examples", slug: "bot-runner/examples" },
          ],
        },
        {
          label: "Resources",
          items: [
            {
              label: "API Reference",
              items: [
                { label: "Methods", slug: "api" },
                { label: "Types", slug: "api/types" },
              ],
            },
            { label: "Bot API Types", slug: "api-types/bot-api" },
            { label: "Mini App Types", slug: "api-types/webapp" },
            { label: "Code Generator", slug: "api-types/how-it-works" },
            { label: "FAQ", slug: "faq" },
          ],
        },
      ],
    }),
  ],
});
