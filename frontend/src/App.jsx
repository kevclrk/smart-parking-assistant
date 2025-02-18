import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Welcome to Smart Parking Assistant</h1>
      <p>Find and book your parking spot easily.</p>
    </div>
  )
}

export default App
