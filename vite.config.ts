/// <reference types="vitest" />
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    port: 8000,
  },
  preview: {
    port: 3005,
  },
  test: {
    globals: true,
    include: ["**/__test?(s)__/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,js}"],
      exclude: ["src/**/index.ts", "src/**/*.{test,spec}.{ts,js}"],
    },
  },
});
