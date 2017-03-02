// @flow

// Modules
const express = require('express');

// Local
const config = require('./config.js');

// Server
const server = express();

// Launch server
server.listen(config.port, config.hostname, () => console.log(`Server successfully launched at http://${config.hostname}:${config.port}`));