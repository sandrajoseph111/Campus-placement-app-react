import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addreg from './components/Addreg'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Addreg />
      <Search />
    </>
  )
}

export default App
