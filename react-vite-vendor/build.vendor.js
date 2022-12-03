const { buildSync } = require('esbuild');
const { resolve } = require('path');

buildSync({
  entryPoints: [resolve(__dirname, 'src/vendor.js')],
  bundle: true,
  minify: true,
  sourcemap: true,
  globalName: 'vendorV1',
  format: 'iife',
  platform: 'browser',
  outfile: resolve(__dirname, 'src/public/vendorV1.js'),
});