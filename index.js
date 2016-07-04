'use strict';

require('dotenv').config({silent: true});
const http = require('http');
const proxy = require('proxy');
const server = proxy(http.createServer());
server.listen(process.env.PORT);