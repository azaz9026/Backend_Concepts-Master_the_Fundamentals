var express = require('express');
var router = express.Router();
const userModel = require('./users')


/* GET Home page. */

router.get('/', function(req, res) {
  res.render('index');
});

/* GET Create page. */

router.get('/create', async function(req, res) {
 let userData = await userModel.create({
  username : 'harshit',
  username : 'harshit@java',
  description : 'I am a guy of 25 and I love so much java',
  categories : {
    type : ['Java' , 'C++'],
    default : []
  }
 })
 res.send(userData)
});

/**
 * 
 * router.get('/failed', function(req, res) {
  req.flash("age" , 12)
  req.flash("name" , "Md Azaz")
  res.send('bangaya')
});

router.get('/checkkaro', function(req, res) {
  console.log(req.flash('age'), req.flash('name'))
  res.send('check karlo be ke terminal par')
});

*/

module.exports = router;
