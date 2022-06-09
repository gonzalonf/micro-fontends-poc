const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;

console.log("custom config");
// TODO: add module federation here

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  let extendedSingleSpaConfig = {
    ...singleSpaWebpackConfig,
    output: {
      ...singleSpaWebpackConfig.output,
      publicPath: "http://localhost:4000/",
    },
    plugins: [
      ...singleSpaWebpackConfig.plugins,
      new ModuleFederationPlugin({
        name: "login",
        filename: "remoteEntry.js",
        library: { type: "global", name: "login" },
        remotes: {},
        exposes: {
          "./Login": "./src/main.single-spa.ts",
        },
        shared: [
          // "single-spa-angular",
          // "rxjs",
          // "rxjs/operators",
          // "@angular/core",
          // "@angular/common",
          // "@angular/compiler",
          // "@angular/platform-browser",
          // "@angular/platform-browser-dynamic",
          // "@angular/animations",
        ],
      }),
    ],
  };

  return extendedSingleSpaConfig;
};
