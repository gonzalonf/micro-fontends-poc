const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;

console.log("custom config");
// TODO: add module federation here

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
