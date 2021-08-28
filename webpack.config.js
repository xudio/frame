const path = require("path");
const HtmlWebpackPlugins = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", {loader: "css-loader", options: {esModule: false}}]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            esModule: false,
            outputPath: "assets/images"
          }
        }
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugins({
      filename: "index.html",
      template: path.resolve(__dirname, "public/index.html"),
      chunks: ["main"],
    }),
  ],
};
