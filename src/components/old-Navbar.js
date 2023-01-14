/* eslint-disable */
import React from "react";
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom"
import "../components/Navbar.css"
import BurgerMenu from './BurgerMenu';

//simple navbar with props
//by adding 'exact className' the / link isn't active all the time

const Navbar = (props) => {

  const menuItems = [
    { to: "/services", displayName: "Tjänster"},
    { to: "/about", displayName: "Om oss"},
    { to: "/contact", displayName: "Kontakt"},
  ]

  const burgerMenuItems = [
    { to: "/services", displayName: "Tjänster"},
    { to: "/about", displayName: "Om oss"},
    { to: "/contact", displayName: "Kontakt"},
  ]

  return ( 
    <div className="navbar">
        <Link className="logo" to={'#home'} color="inherit" underline="none" />
      <div className="link-wrapper">
        {( 
          menuItems.map((item, index) => (
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