import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  base: process.env.ELECTRON ? "./" : "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      // Ensure proper chunking for both web and electron
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["@tanstack/react-router"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
          ],
        },
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
});
