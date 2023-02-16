import React, { useState } from 'react'


const initialValue={
    logUserEmail:"",
    logPassword:""
}
const Login = () => {

    const [ formData , setFormData ]=useState(initialValue)

    const [ newData , setNewData ]=useState([])

    const handleChange=(e)=>{
     const name=e.target.name;
     const value=e.target.value

     setFormData((data)=>{
        return{ ...data , [name] :value }
     })
    }

const handleSubmit=(e)=>{
    e.preventDefault()

    const newLogData={
        ...formData
    }
    setNewData(newLogData)
    console.log(newLogData);
}

  return (
    <div>
          <div className='loginContainer'>
           <h2>Login</h2>
        <form onSubmit={handleSubmit} >
            <input  onChange={handleChange}  type="email" name="logUserEmail"  placeholder='Enter your email' />
            <input  onChange={handleChange} type="password" name="logPassword"   placeholder='create your password' />
            <button className='loginBtn' type="submit">Sign up</button>
        </form>
           </div>

    </div>
  )
}

export default Login
