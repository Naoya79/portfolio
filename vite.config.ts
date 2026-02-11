import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages での配信を想定し、`base` は環境変数で上書きできるようにしています。
 * - 例: リポジトリ名が `my-portfolio` の場合 → VITE_BASE=/my-portfolio/
 */
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? "/",
});


