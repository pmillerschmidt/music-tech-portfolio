import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import checker from "vite-plugin-checker";
import runtimeErrorModal from "@replit/vite-plugin-runtime-error-modal";
import replitShadcnPlugin from "@replit/vite-plugin-shadcn-theme-json";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
  const isGitHubPages = mode === 'gh-pages';

  return {
    root: "./client", // This tells Vite where your app lives
    base: isGitHubPages ? "/music-tech-portfolio/" : "/", // Match your GitHub repo name here
    plugins: [
      react(),
      checker({ typescript: true }),
      runtimeErrorModal(),
      replitShadcnPlugin(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client/src"), // Fix alias relative to root
        "@db": path.resolve(__dirname, "db"),
      },
    },
    build: {
      outDir: isGitHubPages ? path.resolve(__dirname, "docs") : path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
    },
  };
});
