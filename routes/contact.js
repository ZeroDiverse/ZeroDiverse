var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.render('contact', {
    title: 'Contact page - Say hello | ZeroDiverse',
    path: 'contact'
  });
});

module.exports = router;
