var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Cache-Control', 'public, max-age=31536000');
  res.render('index', { title: 'Student - Software Developer | ZeroDiverse' });
});

module.exports = router;
