import React from 'react'
import { NavLink } from 'react-router-dom'

import '../components/Navbar.css'

const Navbar = (props) => {

  const menuItemsLeft = [
    { to: "/", displayName: "Home"},
    { to: "/about", displayName: "About"},
    { to: "/gallery", displayName: "Gallery"},
  ]

  const menuItemsRight = [
    { to: "/pricing", displayName: "Pricing"},
    { to: "/faq", displayName: "FAQ"},
    { to: "/contact", displayName: "Contact"},
  ]

  return ( 
    <div className="navbar">
      <div className='navbar-wrapper'>
        {( 
          menuItemsLeft.map((item, index) => (
            <NavLink key={index} to={item.to} exact className="navbar-links">
              {item.displayName}
            </NavLink>
          ))
        )}
      </div>
      <h1 className="header-title">Nargle Photography</h1>
      <div className='navbar-wrapper'>
        {( 
          menuItemsRight.map((item, index) => (
            <NavLink key={index} to={item.to} exact className="navbar-links">
              {item.displayName}
            </NavLink>
          ))
        )}
      </div>
    </div>
  )
}

export { Navbar }