import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addreg from './components/Addreg'
import Search from './components/Search'
import Delete from './components/Delete'
import Viewpage from './components/Viewpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Addreg/>}/>
      <Route path='/se' element={<Search/>}/>
      <Route path='/de' element={<Delete/>}/>
      <Route path='/vi' element={<Viewpage/>}/>


      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
