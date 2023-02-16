const mongoose= require("mongoose")
const validator = require("validator")

const userSchema= new mongoose.Schema({
        name:{
            type:String,
            required:[true ,"Please Enter Your Name"],
        },
        email:{
            type:String,
            required:[true ,"Please Enter Your Email"],
            unique:true,
            validator:[validator.isEmail, "Please Enter Your valid Email"]
        },
        password:{
            type:String,
            required:[true,"Please Enter Your Password"],
            minLength:[4, "Please should be greater than 4 characters"],
            select:false
        },
})

module.exports = mongoose.model("User" , userSchema)