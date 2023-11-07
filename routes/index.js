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
  username : 'lux',
  nickname : 'lux@python',
  description : 'I am a guy of 22 and I love so much python',
  categories : {
    type : ['python' , 'Express'],
    default : []
  }
 })
 res.send(userData)
});


router.get('/find' , async (req , res)=>{
  let regex = new RegExp("^lux$" , 'i')
  let user = await userModel.find({username : regex})
  res.send(user)
})

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
