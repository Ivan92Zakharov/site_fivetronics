var fs    = require('fs');
var ploy  = require('./');
var keys  = {
  "key": "3b26c046df453ef469400da2564df2091ce1607fda05a170f31996644faab379081a67a28ef89eab97892969dece8319aa56b71bb8c71376b60528883644ea8e",
  "secret": "c5688121fafdc38a7a772cdd9f1a122698c01a5debb7fc51d60e40bbf2a5b88a0cd0c7cd85c9a8a6d100ebb3c78052feb6f4fde5c0011374fc5e3f52d0138cd5"
};

var api = ploy(keys);

// api.collection('pages').find({ category: 'about' }, function(err, pages) {
//   var filename = pages[0].cover[0].filename;
//   var stream = fs.createWriteStream(__dirname + '/' + filename);
//
//   api.download(filename).pipe(stream).on('finish', function() {
//     console.log('File downloaded');
//   });
//
//   api.upload({
//     filename: 'package.json',
//     stream: fs.createReadStream(__dirname + '/package.json')
//   }, function(err, filename) {
//     console.log('File Uploaded', filename);
//
//     api.unlink(filename, function(err) {
//       if (err) return console.log(err);
//       console.log('File Unlinked', filename);
//     });
//   });
// });

var changes = api.collection('pages').changes();

changes.on('create', function(record) {
  console.log('created', record);
});

changes.on('update', function(record) {
  console.log('updated', record);
});

changes.on('remove', function(record) {
  console.log('removed', record);
});

changes.on('all', function(op) {
  console.log('ALL', op);
});

var Pages = api.collection('pages');

Pages.create({
  title: 'Hello',
  content: 'World'
}, function(err, result) {
  result.title = 'Bye!';
  setTimeout(function(){
    Pages.update(result._id, result, function(err, result) {
      Pages.remove(result._id, function(err) {
        console.log('Done');
      });
    });
  }, 1000);
});