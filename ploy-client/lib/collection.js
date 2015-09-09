var debug = require('debug')('ploy');
var through = require('through2').obj;
var EventEmitter = require('events').EventEmitter;

function spy(tag, fn) {
  return function(err, result) {
    debug(tag, err, result);
    fn(err, result);
  }
}

function Collection(name, remote) {
  if (!(this instanceof Collection)) {
    return new Collection(name, remote);
  }
  
  this.name = name;
  this.remote = remote;
  this.rpc = remote.rpc('db');
  
  debug('init collection', this.name);
}

Collection.prototype.find = function(query, options, cb) {
  if (typeof query === 'function') {
    cb = query;
    query = {};
    options = {};
  }
  
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }
  
  debug('find with', this.name, query, options);
  this.rpc.call('find', this.name, query, options, spy('find', cb));
}

Collection.prototype.create = function(object, cb) {
  debug('create with', this.name, object);
  this.rpc.call('create', this.name, object, spy('create', cb));
}

Collection.prototype.update = function(id, object, cb) {
  debug('update with', this.name, id, object);
  this.rpc.call('update', this.name, id, object, spy('update', cb));
}

Collection.prototype.remove = function(id, cb) {
  debug('remove with', this.name, id);
  this.rpc.call('remove', this.name, id, spy('remove', cb));
}

Collection.prototype.changes = function() {
  var changes = this.remote.streams.createReadStream('changes', { 
    collection: this.name
  });
  
  var emitter = new EventEmitter();
  
  changes.pipe(through(function(chunk, enc, cb) {
    emitter.emit('all', chunk);
    emitter.emit(chunk.op, chunk.record);
    cb();
  }));
  
  emitter.close = function() {
    changes.end();
  }
  
  return emitter;
}

exports = module.exports = Collection;