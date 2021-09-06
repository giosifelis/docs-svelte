import { defineConfig } from "vite";
import { resolve } from "path";
import restart from "vite-plugin-restart";
import {svelte} from "@sveltejs/vite-plugin-svelte";
import windi from "vite-plugin-windicss";

export default defineConfig(({ command, mode }) => {
  const production = mode === "production";
  return {
    clearScreen: false,
    // proxy: {
    //   cookieDomainRewrite: "franses.app",
    //   target: 'https://help.franses.app'
    // },
    resolve: {
      alias: {
        $components: resolve("src/components"),
        $assets: resolve("src/assets"),
      },
    },
    optimizeDeps: {exclude: ["svelte-navigator"]}, // https://github.com/EmilTholin/svelte-navigator/pull/200/commits/ec654d33bc3461b6a4ea90ccad76df9ba4ca9340
    plugins: [
      restart({
        restart: ["./windi.config.cjs"],
      }),
      windi(),
      svelte({
        hot: !production,
      }),
    ],
    define: {
      "process.env": process.env,
    },
  };
});
