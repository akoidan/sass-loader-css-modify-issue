const path = require('path');

module.exports = {
  entry: "./main.css",
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
              convertToAbsoluteUrls: true
            }
          },
          "css-loader",
        ]
      },
    ],
  },
};
