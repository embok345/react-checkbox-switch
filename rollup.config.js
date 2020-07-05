import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
  input: "src/CheckBox.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: 'build/index.min.js',
      format: 'cjs',
      exports: 'named',
      plugins: [terser({keep_classnames: true})],
      sourcemap: false,
    },
    {
      file: pkg.module,
      format: "esm",
      exports: "named",
      sourcemap: true,
    }
  ],
  plugins: [
    external(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
      minimize: true,
    }),
    resolve(),
    typescript({
      
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
    }),
  ]
};