const mongoose  = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/Endgame2')


const userSchema = mongoose.Schema({
  username : String,
  username : String,
  description : String,
  categories : {
    type : Array,
    default : []
  },
  datecreated : {
    type : Date,
    default : Date.now()
  }

})

