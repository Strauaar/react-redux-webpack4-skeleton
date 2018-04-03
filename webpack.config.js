const path = require('path');

module.exports = {
  entry: "./app/entry.jsx",
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "bundle.js", 
  },

  module: {
    rules: [
      {
        test: [/\.jsx?$/,/\.js?$/],
        loader: "babel-loader",
        options: {
          presets: ["env", "react"]
        },
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", "*"],
  },

  devtool: "source-map",
  context: __dirname,
}