import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Layout from './ui/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <Navbar />
      < Layout />
      </div>
  )
}

export default App
