import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: true,
  dts: true,
  format: ["esm"],
  external: ["react", "react-dom"],
});
