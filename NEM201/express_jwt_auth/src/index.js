const express = require('express');
const { default: mongoose } = require('mongoose');
const Usermodle = require('./models/user.models');
const jwt = require("jsonwebtoken")

const app = express();
 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get( '/' ,(req , res) => res.send('hello Rajkumar')) ;


app.post("/signup" ,async (req,res)=>{
    try {
            const { name , email , password ,age }=req.body;
            const user=new Usermodle({name , email , password ,age});
            await user.save()
            return res.status(201).send("Sign Up successfully")
        
    } catch (error) {
        return res.status(401).send("invaild Sign up Credentials")
    }

})

app.post("/login" , async (req ,res)=>{
        const { email , password}=req.body;
      const user= await Usermodle.findOne({email , password})
      if(user)
      {
        const token=jwt.sign({_id:user._id ,name:user.name ,age:user.age},"secrte1234" ,
        {
            expiresIn:"7 days"
        });
        return res.status(200).send({message:"User Login successfull" , loginToken:token})
      }
      else{
          return res.status(404).send("User not found")
      }
})
 

app.get("/user/:id" , async(req,res)=>{
    const {id}=req.params;
   const token=req.headers["authorization"];
   if(!token)
   {
    return res.send("unauthorizated")
   }

   try {
    const verifaction=jwt.verify(token , "secrte1234");
    if(verifaction)
    {
        const user =await Usermodle.findOne({_id:id})
        return res.send(user)
    }
   } catch (error) {
    return res.send("invaild token")
   }
})

mongoose.connect("mongodb://localhost:27017/users").then(()=>{
    app.listen(8080 , ()=> {console.log('server is running on port 8080')});
})