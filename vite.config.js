import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import SitemapPlugin from "vite-plugin-sitemap";
import viteCompression from "vite-plugin-compression";

// Dynamic routes for agricultural export products
const dynamicRoutes = [
  "/products/products/frish",
  "/products/products/frozen",
  "/products/products/frish/frish-fruits",
  "/products/products/frish/frish-vegetables",
  "/products/products/frozen/frozen-fruits/",
  "/products/products/frozen/frozen-vegetables",
];
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    SitemapPlugin({
      hostname: "https://www.greenphoenixeg.com",
      baseUrl: "https://www.greenphoenixeg.com",
      routes: [
        "/",
        "/about",
        "/contact-us",
        "/services",
        "/products",
        ...dynamicRoutes,
      ],
      outDir: "dist",
      // Agricultural export-specific settings
      contentPriority: 0.8,
      lastmod: new Date().toISOString(),
      changeFreq: "weekly",
    }),
    viteCompression(),

    // ضغط Brotli
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
  // Ensure clean URLs for SEO
  // build: {
  //   emptyOutDir: true,
  //   assetsInlineLimit: 4096,
  // },
});
