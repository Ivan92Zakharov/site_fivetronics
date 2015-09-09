var debug = require('debug')('ploy');
var Collection = require('./collection');

function API(remote) {
  if (!(this instanceof API)) {
    return new API(remote);
  }
  
  this.remote = remote;
  this.files = remote.rpc('files');
  this.collections = {};
  debug('initialize');
}

API.prototype.collection = function(name) {
  if (!this.collections[name]) {
    this.collections[name] = new Collection(name, this.remote);
  }
  return this.collections[name];
}

API.prototype.upload = function(file, cb) {
  debug('upload with', file);
  
  var filename = [(Date.now() + Math.random()), file.filename].join('--');
  var stream = this.remote.streams.createWriteStream('upload', { 
    binary: true, 
    filename: filename 
  })
  
  file.stream.pipe(stream).on('finish', function() {
    cb(null, filename);
  }).on('error', function(err) {
    cb(err);
  });
}

API.prototype.download = function(filename) {
  debug('download with', filename);
  return this.remote.streams.createReadStream('download', {
    binary: true,
    filename: filename
  });
}

API.prototype.unlink = function(filename, cb) {
  debug('unlink with', filename);
  this.files.call('remove', filename, cb);
}

exports = module.exports = API;