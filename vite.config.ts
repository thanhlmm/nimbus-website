import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig(() => {
  return {
    ssr: { target: "node", format: "cjs" },
    plugins: [nodePolyfills({
      // To exclude specific polyfills, add them to this list.
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }), qwikCity(), qwikVite(), tsconfigPaths(), qwikReact()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
