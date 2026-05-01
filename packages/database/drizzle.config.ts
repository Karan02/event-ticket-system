import { config } from "dotenv";
import type { Config } from "drizzle-kit";
import path from 'path'

// go to actual root where .env exists
config({
  path: path.resolve(process.cwd(), "ticketing-platform-monorepo-main/.env"),
});

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
