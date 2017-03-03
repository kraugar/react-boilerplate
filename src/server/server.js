// @flow

// Modules
import express from 'express';

// Local
import config from './config.js';

// Server
const server = express();

// Launch server
server.listen(config.port, config.hostname, () => console.log(`Server successfully launched at http://${config.hostname}:${config.port}`));