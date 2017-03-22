// Added modules
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const favicon = require('serve-favicon');

// Built-in modules
const path = require('path');

// Local modules
const webpackConfig = require('./dev.config.js');
const { server, environment } = require('../src/server/server.js');

// Compiler
const compiler = webpack(webpackConfig);

// Development middleware
const devMiddleware = webpackDevMiddleware(compiler, {
  reload: true, // Set to true to auto-reload the page when webpack gets stuck
  noInfo: true, // Set to true to disable informational console logging
  // Avoids CPU overload on some systems
  watchOptions: {
    ignored: /node_modules/
  },
  publicPath: webpackConfig.output.publicPath // The bundled files will be available in the browser under this path
});

// Hot middleware
const hotMiddleware = webpackHotMiddleware(compiler);

// If environment is development
if (environment === 'development') {
  // Dev & Hot middleware
  server.use(devMiddleware);
  server.use(hotMiddleware);

  // Use 'favicon.ico' from 'public' dir
  server.use(favicon(path.resolve('public', 'favicon.ico')));

  // Use static files from 'public' dir
  server.use(express.static(path.resolve('public')));
}
