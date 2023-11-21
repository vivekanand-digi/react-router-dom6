import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle={
        fontWeight:'bold',
        textDecoration:'underline',
        color:'red'
    }
    const navLinkStyle = {
        marginRight:"40px"
    }
  return (
    <div>
      <Link to="/" style={navLinkStyle}>Home</Link>
      <NavLink to='/about' style={({isActive}) =>(isActive ? {...activeStyle , ...navLinkStyle} : navLinkStyle )}>about</NavLink>
      <NavLink to='/profile' style={({isActive}) =>(isActive ? {...activeStyle , ...navLinkStyle} : navLinkStyle )}>profile</NavLink>
    </div>
  )
}

export default Navbar
