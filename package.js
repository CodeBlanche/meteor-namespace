Package.describe({
  summary: "Namespaces for JavaScript"
});

Package.on_use(function (api, where) {
  api.add_files('namespace.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['namespace', 'tinytest']);

  api.add_files('namespace_tests.js', ['client', 'server']);
});
