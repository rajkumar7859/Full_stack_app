import React, { useState } from 'react'
import "./pages.css"


const initialValue={
    username:"",
    email:"",
    password:"",
    file:""
}

const Signup = () => {

const [ formData ,setFormData ]=useState(initialValue)
const [ allData , setData ]=useState([])


const handleChange=(e)=>{
const name =e.target.name;
const value = e.target.value;

setFormData((data)=>{
return {...data , [name]:value}
})
}

const handleSubmit=(e)=>{
    e.preventDefault()
    const newData = {...formData };
      console.log(newData)
    setData(newData)
e.target.reset()
}



  return (
    <div>
           <div className='signupContainer'>
           <h2>Signup</h2>
        <form onSubmit={handleSubmit} >
            <input type="text" onChange={handleChange} name="username" placeholder='Enter your name' />
            <input type="email"onChange={handleChange} name="email"  placeholder='Enter your email' />
            <input type="password"onChange={handleChange} name="password"   placeholder='create your password' />
            <input type="file"onChange={handleChange} name="file" />
            <button className='signUpBtn' type="submit">Sign up</button>
        </form>
           </div>

    </div>
  )
}

export default Signup
