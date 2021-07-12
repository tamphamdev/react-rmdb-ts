import React, { useState, useEffect } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Home from './components/Home'
// Styles
import {GlobalStyle} from './style/GlobalStyle'

const  App:React.FC = () => {

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Home />
    </div>
  )
}

export default App
