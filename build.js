const esbuild = require('esbuild');
const { zip } = require('zip-a-folder');
const fs = require('fs-extra');

fs.emptyDirSync('dist');

fs.copySync('public', 'dist');

esbuild.buildSync({
  entryPoints: ['src/background.js'],
  bundle: true,
  outfile: 'dist/background.js',
  format: 'iife',
  target: ['chrome100'],
  minify: true
});

(async () => {
  await zip('./dist', './tab-grouper.zip');
  console.log('Build complete: tab-grouper.zip');
})();
