const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "csv",
    projectName: "home",
    webpackConfigEnv,
    argv,
  });

  const config = merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
  console.log(JSON.stringify(config, null, 2));
  return config;
};
