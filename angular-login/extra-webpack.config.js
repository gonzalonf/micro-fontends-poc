const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;
const deps = require("./package.json").dependencies;

console.log("custom config");
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
        library: { type: "var", name: "login" },
        remotes: {
          vanilla: "vanilla",
        },
        exposes: {
          "./Login": "./src/main.single-spa.ts",
        },
        shared: {
          "single-spa-angular": {
            singleton: true,
            eager: true,
            requiredVersion: deps["single-spa-angular"],
          },
          rxjs: {
            singleton: true,
            eager: true,
            requiredVersion: deps["rxjs"],
          },
          "rxjs/operators": {
            singleton: true,
            eager: true,
            requiredVersion: deps["rxjs/operators"],
          },
          "@angular/core": {
            singleton: true,
            eager: true,
            requiredVersion: deps["@angular/core"],
          },
          "@angular/common": {
            singleton: true,
            eager: true,
            requiredVersion: deps["@angular/common"],
          },
          "@angular/compiler": {
            singleton: true,
            eager: true,
            requiredVersion: deps["@angular/compiler"],
          },
          "@angular/platform-browser": {
            singleton: true,
            eager: true,
            requiredVersion: deps["@angular/platform-browser"],
          },
          "@angular/platform-browser-dynamic": {
            singleton: true,
            eager: true,
            requiredVersion: deps["@angular/platform-browser-dynamic"],
          },
          "@angular/animations": {
            singleton: true,
            eager: true,
            requiredVersion: deps["@angular/animations"],
          },
        },
      }),
    ],
  };

  return extendedSingleSpaConfig;
};
