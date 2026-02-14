import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
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
          label: "Guides",
          items: [
            { label: "API Types", slug: "guides/api-types" },
            { label: "HTTP Client", slug: "guides/http-client" },
            { label: "Bot Runner", slug: "guides/bot-runner" },
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
