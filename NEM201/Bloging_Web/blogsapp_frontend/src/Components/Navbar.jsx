import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {

    const  navLink=[
        {
    to:"/",
     title:"Home"
        },
        {
     to:"Profile",
     title:"Profile"
        },
        {
    to:"Signup",
     title:"Sign up"
        },
        {
     to:"Login",
     title:"Login"
        }
    ]


  return (
        <div className='navContainer'>
            
      {
        navLink?.map((links)=><NavLink
        key={links.to}
        to={links.to}
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      >
        {links.title}
      </NavLink>)
      }
        </div>
  )
}

export default Navbar
