const path = require('path');
const { SplitChunksPlugin } = require("webpack").optimize;
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './CCWebApp_api/frontend/src/index.js',
  output: {
    path: path.resolve(__dirname, 'CCWebApp_api/frontend/static/frontend'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
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
              plugins: [
                {
                  name: 'removeTitle',
                  active: true
                },
                {
                  name: 'convertColors',
                  params: {
                    shorthex: true
                  }
                },
                {
                  name: 'convertPathData',
                  active: true
                },
                {
                  name: 'removeDoctype',
                  active: true
                },
                {
                  name: 'removeXMLProcInst',
                  active: true
                },
                {
                  name: 'removeComments',
                  active: true
                },
                {
                  name: 'removeMetadata',
                  active: true
                },
                {
                  name: 'removeEditorsNSData',
                  active: true
                },
                {
                  name: 'cleanupAttrs',
                  active: true
                },
                {
                  name: 'inlineStyles',
                  active: true
                },
              ]
            }
          }
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    mergeDuplicateChunks: false,
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false,
    maxAssetSize: 1000000, // bytes
    maxEntrypointSize: 500000, // bytes
  }
};