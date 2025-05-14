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
    plugins: [
      react(),
      checker({ typescript: true }),
      runtimeErrorModal(),
      replitShadcnPlugin(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client/src"),
        "@db": path.resolve(__dirname, "./db"),
      },
    },
    root: "./client",
    build: {
      outDir: isGitHubPages ? "../docs" : "../dist/public",
      emptyOutDir: true,
    },
    // Set base for GitHub Pages - CHANGE THIS TO YOUR REPO NAME
    base: isGitHubPages ? "/music-tech-portfolio/" : "/",
  };
});
