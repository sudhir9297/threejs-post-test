import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/selective-bloom-threejs/",
  plugins: [react(), glsl()],
});
