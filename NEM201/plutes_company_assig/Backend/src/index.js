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


app.get('/', (req, res) => res.send('hello'))


Connect()
app.listen(port, () => {
  try {
    console.log(`Server is running on port http://localhost:${port}`)
  } catch (error) {
    console.log(error.message);
  }
})
