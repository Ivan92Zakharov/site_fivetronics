var ws      = require('websocket-stream');
var talk    = require('talker/lib/client');
var api     = require('./lib/api');

exports = module.exports = function(options) {
  var token = [options.key, options.secret].join(':');
  return api(talk(function() {
    return ws('wss://www.ploy.cc/api');
  }, token));
}