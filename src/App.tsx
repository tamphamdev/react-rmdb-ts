import React, { useState, useEffect } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Home from './components/Home'
// Styles
import {GlobalStyle} from './style/GlobalStyle'

const  App:React.FC = () => {
  const [count, setCount] = useState(0)
  const handleSetCount = () => setCount(count => count +1)

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Home />
      <Button callback={handleSetCount} count={count}/>
    </div>
  )
}

export default App
