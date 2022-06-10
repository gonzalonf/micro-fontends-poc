const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    publicPath: "http://localhost:3010/",
    // libraryTarget: "System",
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
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "reactUi",
      library: { type: "var", name: "reactUi" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Header": "./src/HeaderMfe",
        // Footer: "./src/Footer",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: deps["react"],
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
        "single-spa-react": {
          singleton: true,
          eager: true,
          requiredVersion: deps["single-spa-react"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
      // tags: ["http://localhost:3001/remoteEntry.js"],
      // append: false,
      // publicPath: false,
    }),
  ],
};
