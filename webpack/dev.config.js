// TODO: Make proper documentation for each object

// Added modules
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

// Built-in modules
const path = require('path');

module.exports = {
  devtool: 'inline-source-map', // https://webpack.js.org/configuration/devtool/#for-development
  entry: {
    vendor: [
      'react-hot-loader/patch', // Tweak React components in real time
      'webpack-hot-middleware/client?reload=true&noInfo=true', // Hot reloading attached to our server
      'react',
      'react-dom'
    ],
    main: path.resolve('src', 'client', 'client.js')
  },
  output: {
    path: '/',
    publicPath: '/',
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader?cacheDirectory=true',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                precss,
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ]
                })
              ]
            }
          }
        ]
      },
      {
        exclude: [
          /\.html$/,
          /\.js$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/
        ],
        loader: 'file-loader',
        options: {
          name: 'assets/media/[name].[ext]'
        }
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/media/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'], // vendor libs + extracted manifest
      minChunks: Infinity
    }),
    new ManifestPlugin({
      fileName: 'assets-manifest.json'
    }),
    new ChunkManifestPlugin({
      filename: 'chunks-manifest.json',
      manifestVariable: 'webpackManifest'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('public', 'index.html')
    })
  ],
  // Some libs import node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become cumbersome.
  performance: {
    hints: false
  }
};
