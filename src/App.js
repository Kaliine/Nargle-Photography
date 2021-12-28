import React from 'react'
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
