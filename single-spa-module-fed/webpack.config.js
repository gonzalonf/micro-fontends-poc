const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
//const CopyPlugin = require("copy-webpack-plugin")

const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
      },
    ],
  },

  plugins: [
    // this is not very well documented
    new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      // NOTE: for  remote as variable, it needs the "library" prop and the script to be loaded on the html
      // maybe for scalability should develop a solution for replacing it here and adding the script tags from webpack,
      // the sintax for remote with url is as follows:
      // remotes: {ui: "reactUi@url"}, EG: {ui: "reactUihttp://localhost:3010/remoteEntry.js"},
      // if URL is added on webpack not required on HTML
      library: { type: "global", name: "shell" }, //NOTE: this is important for different type of imports, if you wantto pass routes on all, remove library property
      remotes: {
        ui: "reactUi",
        vanilla: "vanilla",
        login: "login",
        // ui: "reactUi@http://localhost:3010/remoteEntry.js", //not working
        // vanilla: "vanilla@http://localhost:3015/remoteEntry.js",
      },
      // exposes: {
      //   fruit: "./src/fruit",
      // },
      shared:
        // ...Object.keys(deps), // for prototype simplicity
        // 'single-spa'
        {
          "single-spa": {
            singleton: true,
            eager: true,
            requiredVersion: deps["single-spa"],
          },
        },

      // react: {
      //   requiredVersion: deps.react,
      //   import: 'react', // the "react" package will be used a provided and fallback module
      //   shareKey: 'react', // under this name the shared module will be placed in the share scope
      //   shareScope: 'default', // share scope with this name will be used
      //   singleton: true, // only a single version of the shared module is allowed
      // },
      // 'react-dom': {
      //   requiredVersion: deps['react-dom'],
      //   singleton: true, // only a single version of the shared module is allowed
      // },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
