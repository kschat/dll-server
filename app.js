'use strict';

var http = require('http')
  , fs = require('fs');

http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'application/x-msdownload');
  fs.createReadStream('NwEdgeLib.dll').pipe(res);
}).listen(8000);