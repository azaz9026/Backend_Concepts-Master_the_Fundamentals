var express = require('express');
var router = express.Router();

/* GET Home page. */

router.get('/', function(req, res) {
  a = 12;
  res.render('index');
});

/* GET Contact page. */

router.get('/failed', function(req, res) {
  req.flash("age" , 12)
  req.flash("name" , "Md Azaz")
  res.send('bangaya')
});

router.get('/checkkaro', function(req, res) {
  console.log(req.flash('age'), req.flash('name'))
  res.send('check karlo be ke terminal par')
});

module.exports = router;
