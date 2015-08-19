

var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var enchilada    = require('enchilada');
var routes       = require('./routes/index');
var users        = require('./routes/users');
var debug       = require('debug')('app');
var port        = process.env.PORT || 5000;
var app = express();
var production = process.env.NODE_ENV === 'production';
// view engine setup



app.use(logger('dev'));

app.use(enchilada({
  src: path.join(__dirname, '/src'),
  cache: production, // only cache in production
  compress: production // only compress in production
}));
var quesadilla   = require('quesadilla');

app.use(quesadilla(path.join(__dirname, '/style')));
app.use(express.static(__dirname + '/public'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/', routes);
app.use('/contact', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


// module.exports = app;
app.listen(port, function() {
  debug('Server is listening on port %s', port);
});
