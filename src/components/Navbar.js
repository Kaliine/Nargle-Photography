/* eslint-disable */
import React from "react";
import { NavLink } from 'react-router-dom';
import "../components/Navbar.css"
import BurgerMenu from './BurgerMenu';

//simple navbar with props
//by adding 'exact className' the / link isn't active all the time

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

  const burgerMenuItems = [
    { to: "/", displayName: "Home"},
    { to: "/about", displayName: "About"},
    { to: "/gallery", displayName: "Gallery"},
    { to: "/pricing", displayName: "Pricing"},
    { to: "/faq", displayName: "FAQ"},
    { to: "/contact", displayName: "Contact"},
  ]

  return ( 
    <div className="navbar">
      <div className='link-wrapper'>
        {( 
          menuItemsLeft.map((item, index) => (
            <NavLink key={index} to={item.to} exact="true" className="navbar-links">
              {item.displayName}
            </NavLink>
          ))
        )}
      </div>
      <h1 className="header-welcome">Nargle Photography</h1>
      <div className='link-wrapper'>
        {( 
          menuItemsRight.map((item, index) => (
            <NavLink key={index} to={item.to} exact="true" className="navbar-links">
              {item.displayName}
            </NavLink>
          ))
        )}
      </div>
      <BurgerMenu items={burgerMenuItems} />
    </div>
  )
}

export { Navbar }