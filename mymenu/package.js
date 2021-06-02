Package.describe({
  name: 'onokumus:metismenujs',
  version: '1.2.1',
  summary: 'A menu plugin',
  git: 'https://github.com/onokumus/metismenujs',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles([
    "dist/mymenujs.css",
    "dist/mymenujs.js"
  ], 'client');
});
