import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Layout/>}></Route>
        <Route path = '/' element = {<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
