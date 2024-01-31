import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  name: "default",
  title: "next-sea-reach",

  projectId: "xdlik3hi",
  dataset: "production",
  apiVersion: "2024-01-30",
  basePath: "/admin",

  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
