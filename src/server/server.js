// Added modules
const express = require('express');
const favicon = require('serve-favicon');
const { bold } = require('chalk');

// Built-in modules
const path = require('path');
const fs = require('fs');

// Local modules
const config = require('./config.js');
const routes = require('./routes.js');

// Creates an Express application
const server = express();

// Gets current environment
const environment = process.env.NODE_ENV;

// Export before require 'webpack/dev.server.js'
module.exports = { server, environment };

// If environment incorrect throw error
if (environment !== 'production' && environment !== 'development') {
  throw new Error(
    `${bold.dim('Incorrect environment')} ${bold.red(environment)}${bold.dim('.')} ` +
      `${bold.dim('Correct environments are')} ${bold.yellow('development')} ${bold.dim('and')} ${bold.green('production')}${bold.dim('!')}`
  );
}

// Use routes from 'server/routes.js'
server.use(routes);

// If environment is production
if (environment === 'production') {
  // Gets 'dist' path
  const distPath = path.resolve('dist');

  // Checks if 'dist' path exists
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `${bold.red(distPath)} ${bold.red("doesn't exists!")}` +
        `\n\t${bold.dim('- Use')} ${bold.cyan('yarn build')} ${bold.dim('to build client for production.')}` +
        `\n\t${bold.dim('- Use')} ${bold.cyan('yarn run:prod')} ${bold.dim('or')} ${bold.cyan('yarn run:prod-cluster')} ${bold.dim('to run production server.')}\n`
    );
  }

  // Use 'favicon.ico' from 'dist' dir
  server.use(favicon(path.join(distPath, 'favicon.ico')));

  // Use static files from 'dist' dir
  server.use(express.static(distPath));

  // Information about static files dir
  console.log(
    `${bold.dim('Using files from')} ${bold.magenta('dist')} ${bold.dim('directory.')}`
  );
}

// If environment is development
if (environment === 'development') {
  // Require 'webpack/dev.server.js' for development
  require('../../webpack/dev.server.js');

  // Information about static files dir
  console.log(
    `${bold.dim('Using files from')} ${bold.magenta('public')} ${bold.dim('directory.')}`
  );
}

// Listen on specified port and hostname
server.listen(config.port, config.hostname, () => {
  // Colored environment
  const coloredEnv = environment === 'production'
    ? bold.green(environment)
    : bold.yellow(environment);

  // Information about server
  console.log(
    `${bold.dim('Server successfully launched at')} ${bold.blue('http://')}${bold.blue(config.hostname)}${bold.blue(':')}${bold.blue(config.port)} ` +
      `${bold.dim('(')}${coloredEnv}${bold.dim(')')}`
  );

  // Information about how to stop server
  console.log(
    `${bold.dim('To stop')} ${coloredEnv} ${bold.dim('server use')} ${bold.cyan('yarn pm2:stop')}`
  );

  // Line
  console.log(
    `${bold.white('———————————————————————————————————————————————————————————————————————————')}`
  );
});
