const mongoose =require("mongoose");

const Connect=()=>{
try {
  mongoose.connect=(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
console.log("Mongoose app in connected successfully");
} catch (error) {
    console.log("Mongoose app in connection failed");
}
}

module.exports=Connect