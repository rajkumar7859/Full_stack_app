const { Schema , model } =require("mongoose");

const UserSchema=new Schema(
    {
        name:String,
        email:{
            type:String,
            unique:true
        },
        password:String,
        age:Number
    }
)

const Usermodle=model("user" , UserSchema)

module.exports=Usermodle;