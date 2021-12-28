import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Switch>
          <Route />
        </Switch> */}
      </BrowserRouter>
    </>
  )
}
