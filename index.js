'use strict';
require ('dotenv').config();

const PORT = process.env.PORT || 4444;
const server = require('./src/server.js');
server.start(PORT);
