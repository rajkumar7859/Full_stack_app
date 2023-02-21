const express =require("express");
const Connect = require("./db");
const statisticRouter=require("./routes/statistics.Router")
require("dotenv").config()

const app= express()
port=process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/" , (req, res)=>res.send("Hello! Rajkumar vishwakarma this side"))

app.use("/statistics" ,statisticRouter)

Connect()
app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})
