import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "https://davidmcosta.github.io/movie-app/",
  plugins: [react(), tailwindcss()],
});
