var express = require('express');
var router = express.Router();
const moment = require('moment')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Hello WORLD!!")
  res.render('index', { title: 'Express' });
});

module.exports = router;
