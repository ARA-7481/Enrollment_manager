const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: {
     app: './CCWebApp_api/frontend/src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
     }),
   ],
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'CCWebApp_api/frontend/static/frontend'),
     clean: true,
   },
   module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|webp)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: [
          // 'svg-inline-loader',
          {
            loader: 'svgo-loader',
            options: {
              
            }
          }
        ]
      },
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false,
    maxAssetSize: 1000000,
    maxEntrypointSize: 500000,
  }
 };