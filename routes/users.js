const mongoose  = require('mongoose')
const pls = require('passport-local-mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/Endgame2')

/** userSchema  */


const userSchema = mongoose.Schema({
  username : String,
  password : String,
  secret : String,
})

userSchema.plugin(pls)

module.exports = mongoose.model('user' , userSchema)