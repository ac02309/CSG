// Bundles the film (src/film) and the parts of three.js it uses into one minified script.
import { build } from "esbuild";
const r = await build({
  entryPoints: ["src/film/main.js"], bundle: true, minify: true, format: "iife", target: ["es2020"],
  outfile: "assets/film.js", legalComments: "eof", metafile: true, logLevel: "warning",
  banner: { js: "/* Clarke Systems Group film. Source: src/film. Includes three.js (MIT licence). */" },
});
const out = r.metafile.outputs["assets/film.js"];
console.log(`assets/film.js ${(out.bytes / 1024).toFixed(0)} KB`);
