const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },

  devServer: {
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
