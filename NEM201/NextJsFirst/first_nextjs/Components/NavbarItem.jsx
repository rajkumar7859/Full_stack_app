import React from 'react'
import Link from "next/link"

const NavbarItem = ({text , href}) => {
  return (
    <div>
      <Link href={href} >
       {text}
      </Link>
    </div>
  )
}

export default NavbarItem
