/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import wyw from "@wyw-in-js/vite";

export default defineConfig({
  plugins: [react(), wyw()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/" },
      { find: "$", replacement: "/src/" },
    ],
  },
  test: {
    globals: true,
    root: "./src",
    environment: "jsdom",
    coverage: {
      provider: "v8",
      thresholds: {
        statements: 59.79,
        autoUpdate: true,
      },
      include: ["**/*/**"],
      exclude: [
        "node_modules/**",
        "test/**",
        "vite.*.ts",
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
  },
});