import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";

const pwaConfig: ManifestOptions = {
  theme_color: "#38a9ff",
  background_color: "#ffffff",
  icons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "favicon",
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "favicon",
    },
    {
      src: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
      purpose: "apple touch icon",
    },
    {
      src: "/maskable_icon.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
  orientation: "any",
  display: "standalone",
  lang: "es-ES",
  name: "Jelpest",
  short_name: "Sistema Jelpest",
  start_url: "https://jelpest-customers.vercel.app/home",
  scope: "https://jelpest-customers.vercel.app/carta",
  description: "Sistema de pedidos para restaurantes",
  id: "jelpest",
  file_handlers: [],
  display_override: [],
  dir: "ltr",
  publicPath: "",
  related_applications: [],
  prefer_related_applications: false,
  protocol_handlers: [],
  shortcuts: [],
  screenshots: [],
  categories: [],
  iarc_rating_id: "",
  share_target: {
    action: "",
    method: undefined,
    enctype: undefined,
    params: {
      title: undefined,
      text: undefined,
      url: undefined,
      files: undefined,
    },
  },
  scope_extensions: [],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      manifest: pwaConfig,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
