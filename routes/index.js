var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FIVETRONICS' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'FIVETRONICS' });
});

module.exports = router;
