const mongoose = require("mongoose")

const Connect=()=>{

    mongoose.connect(process.env.DB_URL ,{
        useNewUrlParser: true, useUnifiedTopology: true
    }).then((res)=>{
        console.log(`MongoDB server Connected on : ${res.connection.host}`);
    }).catch((err)=>{
        console.log(err.message);
    })
}
module.exports=Connect