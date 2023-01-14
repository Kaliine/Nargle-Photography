/* eslint-disable */
import React, { useRef } from 'react'
import "../components/Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  const hideNavbar =()=>{
    navRef.current.classList.remove("responsive_nav")
  }

  return (
    <header>
      <a href="#home">
        <div className='logo'></div>
      </a>
      <div className='nav-container'>
        <nav ref={navRef}>
          <a onClick={hideNavbar} href="#services">Tjänster</a>
          <a onClick={hideNavbar} href="#about">Om oss</a>
          <a onClick={hideNavbar} href="#contact">Kontakt</a>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  )
}

export { Navbar }