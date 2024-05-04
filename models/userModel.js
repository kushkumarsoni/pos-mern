const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        unique : true,  //email should be unique for every user
        required:[true,"Please enter your email"]
    },
    phone:{
        type:String,
        minlength:10,   //phone number length can not exceeds 10 digits
        maxlength:15,  
    },
    password:{
        type:String,
        required: [true,'Please provide a password']
    }
},{timestamps:true})

module.exports = mongoose.model("users",userSchema);