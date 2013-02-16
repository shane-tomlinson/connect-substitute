/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const substitute  = require('../index'),
      connect     = require('connect'),
      path        = require('path'),
      http        = require('http');

var app = connect();


// substitute middleware must come before static middleware
app.use(substitute.setup({
  from: "http://shanetomlinson.com",
  to: "http://dev.shanetomlinson.com"
}));

app.use(connect.static(path.join(__dirname, 'sample-content')));

var port;

exports.substitution_performed = function(test) {
  var server = http.createServer(app);
  server.listen(3000, function() {
      http.get("http://127.0.0.1:3000/static-resource.js", function(res) {
        var body = "";
        res.on('data', function(chunk) {
          body += chunk.toString();
        });
        res.on('end', function() {
          test.equal(body.indexOf("http://shanetomlinson.com"), -1);
          test.ok(body.indexOf("http://dev.shanetomlinson.com") > -1);

          server.close();
          test.done();
        });
      });
  });
};

