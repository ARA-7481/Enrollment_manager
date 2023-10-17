const path = require('path');

module.exports = {
  mode: 'production',
  entry: './CCWebApp_api/frontend/src/index.js',
  output: {
    path: path.resolve(__dirname, 'CCWebApp_api/frontend/static/frontend'),
    filename: 'main.js',
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
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false,
    maxAssetSize: 1000000, // bytes
    maxEntrypointSize: 500000, // bytes
  }
};