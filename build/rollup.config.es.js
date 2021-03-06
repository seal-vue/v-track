import base from "./rollup.config.base";

const config = Object.assign({}, base, {
  output: {
    name: "v-track",
    file: "dist/v-track.esm.js",
    format: "es"
  }
});

export default config;
