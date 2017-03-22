// TODO: Make proper documentation for each object

// Added modules
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const fs = require('fs-extra');

// Built-in modules
const path = require('path');

module.exports = {
  bail: true, // Don't attempt to continue if there are any errors
  devtool: 'hidden-source-map', // https://webpack.js.org/configuration/devtool/#for-production
  entry: {
    vendor: ['react', 'react-dom'],
    main: path.resolve('src', 'client', 'client.js')
  },
  output: {
    path: path.resolve('dist'),
    filename: 'assets/js/[name].[chunkhash:8].js',
    chunkFilename: 'assets/js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&minimize&sourceMap&importLoaders=1',
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
        })
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
          name: 'assets/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'], // vendor libs + extracted manifest
      minChunks: Infinity
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ManifestPlugin({
      fileName: 'assets-manifest.json'
    }),
    new ChunkManifestPlugin({
      filename: 'chunks-manifest.json',
      manifestVariable: 'webpackManifest'
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('public', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/[name].[contenthash:8].css'
    })
  ],
  // Some libs import node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

// Copy static files from 'public' dir to 'dist'
fs.copySync(path.resolve('public'), path.resolve('dist'), {
  dereference: true,
  filter: file =>
    path.extname(file) !== '.html' && path.extname(file) !== '.htm'
});
