import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      chat: resolve(__dirname, "chat"),
      site: resolve(__dirname, "site"),
      std: resolve(__dirname, "std"),
    },
  },
  test: {
    coverage: {
      include: ["std/**/*.{js,ts}"],
      exclude: ["std/**/index.{js,ts}"],
      reporter: ["text", "lcov", "html"],
      thresholds: {
        statements: 0,
        branches: 0,
        functions: 0,
        lines: 0,
      },
    },
    environment: "happy-dom",
    setupFiles: resolve(__dirname, "happydom.js"),
  },
});
