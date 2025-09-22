import { resolve } from "node:path";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // lib: {
    //   entry: resolve(__dirname, "chat/index.js"),
    //   fileName: "chat-bot",
    //   formats: ["cjs", "es", "iife"],
    //   name: "ChatBot",
    // },
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
      chat: resolve(__dirname, "chat"),
      site: resolve(__dirname, "site"),
      std: resolve(__dirname, "std"),
    },
  },
});
