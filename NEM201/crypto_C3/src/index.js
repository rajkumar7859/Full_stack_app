const express = require('express')
const http=require("http");
const app = express()
const server=http.createServer(app);
const { Server }=require("socket.io");
const io= new Server(server)
 
 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

io.on('connection', (socket) => {
    // socket.on('chat message', (msg) => {
    //   io.emit('chat message', msg);
    //   console.log('chat message' , msg);
    // });
  });

app.get( '/' ,(req , res) =>{
    res.sendFile(__dirname +"/index.html")
}) 
 
server.listen(8080 , ()=> {console.log('server is running on port 8080')})