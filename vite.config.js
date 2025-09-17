import { resolve } from "node:path";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "chat/index.js"),
      fileName: "chat-bot",
      formats: ["cjs", "es", "iife"],
      name: "ChatBot",
    },
    minify: false,
    outDir: "dist",
    rollupOptions: {
      plugins: [
        terser({
          format: {
            comments: false,
          },
        }),
      ],
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@bot/chat": resolve(__dirname, "chat"),
      "@bot/std": resolve(__dirname, "std"),
    },
  },
});
