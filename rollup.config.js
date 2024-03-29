import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.js",
  output: {
    name: "index",
    file: "dist/index.js",
    format: "umd",
    exports: "default",
    noConflict: true,
    sourcemap: true,
  },
  external: ["mermaid"],
  treeshake: true,
  plugins: [resolve(), commonjs(), json(), babel()],
};
