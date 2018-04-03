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
        exclude: /node_modules/,
        options: {
          presets: ["env", "react"]
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
  devtool: "source-map",
  context: __dirname,
}