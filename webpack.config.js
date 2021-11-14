const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./main.js",
  output: {
     filename: "main.js",
     path: path.resolve(__dirname,"./build")
  },
  plugins: [
     new MiniCssExtractPlugin({
        filename: "./css/style.css",
     }),
     new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html",
        hash: true
     })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.htm(l)?$/i,
        loader: "html-loader"
      }
    ]
  }
}
