import React, { useState } from 'react'
import Button from './components/Button'

// Styles
import {GlobalStyle} from './GlobalStyle'

const  App:React.FC = () => {
  const [count, setCount] = useState(0)
  const handleSetCount = () => setCount(count => count +1)

  return (
    <div className="App">
      <GlobalStyle/>
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <Button callback={handleSetCount} count={count}/>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>

      </header>
    </div>
  )
}

export default App
