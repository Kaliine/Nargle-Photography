/* eslint-disable */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Gallery } from './pages/Gallery'
import { Faq } from 'pages/Faq'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/gallery" element={<Gallery/>} />
          <Route exact path="/faq" element={<Faq/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
