const express = require('express')
const Connect = require('./config/db')
const userRouter= require("./routes/userRoute")
const postRouter= require("./routes/postRoute")
const { likePost } = require('./controller/likeController')
const { getFamousPosts } = require('./controller/famousController')
require('dotenv').config()
const app = express()


const port = process.env.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/user", userRouter )
app.use("/post", postRouter )
app.post("/likes" , likePost)
app.get("/famous" , getFamousPosts)

// For general server checking
app.get('/', (req, res) => res.send('hello'))


Connect()
app.listen(port, () => {
  try {
    console.log(`Server is running on port http://localhost:${port}`)
  } catch (error) {
    console.log(error.message);
  }
})



//  Data posting formate
// {
//   "userId":"63ee142b204c49b6666bdb2f",
//   "postId":"63ee28347ef729330861663d"
// }
// {
//     "userId": "63ee2a0a1139d12a2bf7f485",
//     "data": "hello my name is rajkumar "
// }
// {
//   "name":"user16",
//   "email":"user16@gmail.com",
//   "password":"pradyuman"
// }
