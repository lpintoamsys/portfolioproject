import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    headers: {
      "Content-Type": "text/javascript; charset=utf-8",
    },
  },
  plugins: [react(), tailwindcss()],
  base: "/lawrence-portfolio",
});
