import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Serve files from the `src` directory where your index.html lives
  root: path.resolve(__dirname, "src"),
  // Serve static files from the repository-level `public` folder
  // (when `root` is set to `src`, Vite would look for public/ under src by default)
  publicDir: path.resolve(__dirname, "public"),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
}));
