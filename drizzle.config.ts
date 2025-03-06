import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.tsx",
  dbCredentials: {
      url: 'postgresql://StoryTeller-AI_owner:npg_Gv0itSDZh2OV@ep-lively-moon-a8hum4cc-pooler.eastus2.azure.neon.tech/StoryTeller-AI?sslmode=require'
  },
  verbose: true,
  strict: true,
});