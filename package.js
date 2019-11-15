Package.describe({
  name: "fluidframework:fluid-css",
  version: "0.20.1",
  summary: "Modern, Stylish, Easier and Powerful front-end framework for faster web development.",
  git: "https://github.com/fluid-framework/Fluid.git",
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom("1.8.1");
  api.addFiles(
    [
      "dist/fluid-bugs.css",
      "dist/fluid-bugs.min.css",
      "dist/fluid-component.css",
      "dist/fluid-component.min.css",
      "dist/fluid-grid.css",
      "dist/fluid-grid.min.css",
      "dist/fluid-sanitize.css",
      "dist/fluid-sanitize.min.css",
      "dist/fluid-utilities.css",
      "dist/fluid-utilities.min.css",
      "dist/fluid.css",
      "dist/fluid.min.css"
    ],
    "client"
  );
});
