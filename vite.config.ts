import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));
// https://vite.dev/config/
export default defineConfig(() => {
  const langs = ["en", "fr"];
  const langsEntrypoints: Record<string, string> = langs.reduce((acc, lang) => {
    acc[lang] = resolve(__dirname, `${lang}/index.html`);
    return acc;
  }, {} as Record<string, string>);
  return {
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          ...langsEntrypoints,
        },
      },
    },
  };
});
