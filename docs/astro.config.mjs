import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tg-bot-sdk.website",
  integrations: [
    sitemap(),
    starlight({
      title: "Telegram Bot SDK",
      social: {
        github: "https://github.com/kondaurovDev/tg-bot-sdk",
      },
      favicon: "/favicon.svg",
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
          ],
        },
        {
          label: "API Types",
          items: [
            { label: "Why this package?", slug: "api-types/why" },
            { label: "Bot API Types", slug: "api-types/bot-api" },
            { label: "Mini App Types", slug: "api-types/webapp" },
            { label: "How it works", slug: "api-types/how-it-works" },
          ],
        },
        {
          label: "HTTP Client",
          items: [
            { label: "Overview", slug: "http-client/overview" },
            { label: "Usage Examples", slug: "http-client/usage" },
            { label: "Error Handling", slug: "http-client/errors" },
          ],
        },
        {
          label: "Bot Runner",
          items: [
            { label: "Overview", slug: "bot-runner/overview" },
            { label: "Single Mode", slug: "bot-runner/single-mode" },
            { label: "Batch Mode", slug: "bot-runner/batch-mode" },
            { label: "Configuration", slug: "bot-runner/configuration" },
            { label: "Examples", slug: "bot-runner/examples" },
          ],
        },
        {
          label: "API Reference",
          items: [
            { label: "Overview", slug: "api" },
            {
              label: "Methods",
              collapsed: true,
              autogenerate: { directory: "api/methods" },
            },
            {
              label: "Types",
              collapsed: true,
              autogenerate: { directory: "api/types" },
            },
          ],
        },
      ],
    }),
  ],
});
