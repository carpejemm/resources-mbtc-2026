import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // allows us to use test, expect, etc. without importing them
    environment: "jsdom", // simulates a browser environment for testing React components
    setupFiles: ["./src/setupTests.js"],
  },
});