import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Magic-Match/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
