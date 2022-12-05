const express = require('express') 
const nodemailer=require("nodemailer")
const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())


 const tranport= nodemailer.createTransport({
    service: 'gmail',
    port:587,
    auth:{
        user:"rajkumarroaster7877@gmail.com",
        pass:"ddhssmwhkfeybzkp"
    }
})

const mailInfo={
    from:"rajkumarroaster7877@gmail.com",
    to:"anonymouscoder587@gmail.com",
    subject:"Hello",
    text:"Jay shree Ram"
}
app.get( '/' ,(req , res) => res.send('hello')) 


app.get("/login" , (req, res)=>{
    tranport.sendMail(mailInfo ,(error , info)=>{

        if(error)
        {
            console.log(error);
        }
        else{
    console.log("email send successfully" , info.response );
        }
    })
    res.status(201).send("Email send ")
})
 
app.listen(8080 , ()=> {
    console.log('server is running on port 8080')
})