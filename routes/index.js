var express = require('express');
var router = express.Router();
const about = require('../data/about.json');
const books = require('../data/books.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FSG | Resources', about, books });
});

module.exports = router;
