/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import wyw from "@wyw-in-js/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), wyw()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
      { find: "$", replacement: "/src" },
    ],
  },
  test: {
    globals: true,
    root: "./src",
    environment: "jsdom",
    coverage: {
      provider: "v8",
      thresholds: {
        statements: 98.61,
        autoUpdate: true,
      },
      include: ["**/*/**"],
      exclude: [
        "node_modules/**",
        "test/**",
        "vite.*.ts",
        "**/*.styles.*",
        "**/contexts/**",
        "**/stories/**",
        "**/*.d.ts",
        "**/*.test.*",
        "**/*.stories.*",
        "**/*.config.*",
        "**/snapshot-tests/**",
        "**/*.solution.tsx",
        "**/coverage/**",
      ],
      all: true,
    },
    setupFiles: [resolve(__dirname, './src/utils/settings/tests/setup.ts')],
  },
});