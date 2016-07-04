'use strict';

require('dotenv').config({silent: true});
const http = require('http');
const proxy = require('./lib/proxy');
const server = proxy(http.createServer());
server.listen(process.env.PORT);

console.log('proxy start on port', process.env.PORT);