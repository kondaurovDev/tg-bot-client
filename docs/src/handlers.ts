import { defineStaticSite } from "effortless-aws";

export const docsCDN = defineStaticSite({
  dir: "dist",
  build: "pnpm run build",
  spa: false,
});
