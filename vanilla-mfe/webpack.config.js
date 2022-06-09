const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3015/",
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
      name: "vanilla",
      library: { type: "var", name: "vanilla" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./greet": "./src/greet", //NOTE: this './exported' key is the new syntax, a simple key without "./" fails
        // App: "./src/App",
      },
      shared: [],
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
