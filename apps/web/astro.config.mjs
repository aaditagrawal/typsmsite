// @ts-check
import { fileURLToPath } from "node:url"
import { transformAsync } from "@babel/core"
import stylexBabel from "@stylexjs/babel-plugin"
import stylexPostcss from "@stylexjs/postcss-plugin"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import stylex from "./stylex.config.mjs"

export default defineConfig({
  vite: {
    plugins: [
      {
        name: "stylex",
        enforce: "pre",
        async transform(code, id) {
          if (!id.endsWith(".stylex.js")) return
          const result = await transformAsync(code, {
            filename: id,
            babelrc: false,
            configFile: false,
            sourceMaps: true,
            plugins: [[stylexBabel, stylex]],
          })
          if (!result?.code) return
          return { code: result.code, map: result.map }
        },
      },
    ],
    css: {
      postcss: {
        plugins: [
          stylexPostcss({
            include: [
              fileURLToPath(new URL("./src/**/*.stylex.js", import.meta.url)),
              fileURLToPath(
                new URL("../../packages/ui/src/**/*.stylex.js", import.meta.url)
              ),
            ],
            babelConfig: { plugins: [[stylexBabel, stylex]] },
          }),
        ],
      },
    },
  },
  integrations: [react()],
})
