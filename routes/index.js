var express = require('express');
var router = express.Router();
const userModel = require('./users')
const passport = require('passport')
const localStrategy = require('passport-local')

passport.use(new localStrategy(userModel.authenticate()))


/* GET Home page. */

router.get('/' , (req , res)=>{
  res.render('index')
})


router.get('/profile', isLoggedIn , (req , res)=>{
  res.render('welcome to profile')
})

/** register page */

router.post('/register', function(req, res) {
  var userdata = new userModel({
    username : String,
    secret : String,
  })

  userModel.register(userdata , req.body.password)
  .then(function(registereduser){
    passport.authenticate('local'), (req ,res , function(){
      res.redirect('/profile')
    })
  })
});


/** login page */

router.post('/login' , passport.authenticate('local' , {
  successRedirect: '/profile',
  failureRedirect: '/'
}) ,  (req , res)=>{ })


router.get('/logout' , (req , res)=>{ 
  req.logout(function(err){
    if(err) return next(err);
    res.redirect('/')
  })
})


function isLoggedIn(req , res , next){
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect('/')
}




/* GET Create page. */
/* 
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
