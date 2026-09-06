declare module "@stylexjs/postcss-plugin" {
  import type { Plugin } from "postcss"
  import type { TransformOptions } from "@babel/core"
  export default function stylexPostcss(options: {
    include: string[]
    babelConfig: TransformOptions
  }): Plugin
}
