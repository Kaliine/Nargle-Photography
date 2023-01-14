/* eslint-disable */
import React, { useState } from "react";
import './Nav.css'
import logo from "../assets/logga1.png"


const Nav = () => {
   // to change burger classes
   const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')
   const [menuClass, setMenuClass] = useState('menu hidden')
   const [isMenuClicked, setIsMenuClicked] = useState(false)
   // toggle burger menu change
   const updateMenu = () => {
     if (!isMenuClicked) {
       setBurgerClass('burger-bar clicked')
       setMenuClass('menu visible')
     } else {
       setBurgerClass('burger-bar unclicked')
       setMenuClass('menu hidden')
     }
     setIsMenuClicked(!isMenuClicked)
   }

  return (
    <>
      <nav>
      <div>
        <a href="#home">
          <img src={logo} alt="Logga Tandhygienist Carina Andersson" height="100" widht="200" />
        </a>
      </div>
      <div className="navlinks-wrapper">
        <div className="navlinks">
          <a href="#services">
            <p className="navlink">Tjänster</p>
          </a>
          <a href="#about">
            <p className="navlink">Om oss</p>
          </a>
          <a href="#contact">
            <p className="navlink">Kontakt</p>
          </a>
        </div>
        <div className="burger-menu" onClick={updateMenu} aria-hidden="true">
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
      </div>
      </nav>
      <div className={menuClass}>
        <ul>
          <li>
            <a href="#services">
              <p>Tjänster</p>
            </a>
          </li>
          <li>
            <a href="#about">
              <p>Om oss</p>
            </a>
          </li>
          <li>
            <a href="#contact">
              <p>Kontakt</p>
            </a>
          </li>
        </ul>
      </div>
      </>
    )
  } 
  
  export { Nav }
