const express = require('express')
const Connect = require('./config/db')
const userRouter= require("./routes/userRoute")
const postRouter= require("./routes/postRoute")
require('dotenv').config()

const port = process.env.PORT
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/user", userRouter )
app.use("/post", postRouter )

app.get('/', (req, res) => res.send('hello'))


Connect()
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})
