import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Createblog from './pages/Createblog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Layout/>}>
          <Route path = '/' element = {<Home/>}></Route>
          <Route path = '/blog' element = {<Blog/>}></Route>
          <Route path = '/create' element = {<Createblog/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
