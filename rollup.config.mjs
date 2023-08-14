import { rollup, VERSION } from "rollup";
// import {glob} from 'glob';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';

const outputs = [
  {
    dir: "./dist/lib",
    format: "cjs",
    exports: "named",
    entryFileNames: "[name].js",
    // inlineDynamicImports: false,
    preserveModules: true,
    name:undefined,
  },
  {
    dir: "./dist/umd",
    format: "umd",
    exports: "named",
    name: "DcAdminUi",
    entryFileNames: "roll.dc.js",
    // inlineDynamicImports: true,
    preserveModules: false,
  },
];

const inputOption = {
//   preserveEntrySignatures: "strict",
  cache: false,
  input: "./pkgs/testDemo/index.js",
  plugins: [],
};

console.log(inputOption)

async function build() {
  const bundle = await rollup(
    inputOption,
  );
  for (const output of outputs) {
    await bundle.write(output);
  }
}

build();
console.log(VERSION);
