const mongoose = require('mongoose');

// const Schema = new mongoose.Schema({
//    p1:String,
//    p2:String
// })

// const obj = mongoose.model('names',schema)

const userSchema = new mongoose.Schema({
    username:{
        type: String
    },
    password:{
        type:String
    },
})

var userModel = mongoose.model('User',userSchema,'user')

module.exports=userModel