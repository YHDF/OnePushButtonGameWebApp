var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credit', function(req, res, next) {
  res.render('credit', { title: 'Express' });
});
module.exports = router;
