import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Experience from './Pages/Experience'

function App() {


  return (
    <div className='h-screen'>
      <Header />
      <Home />
      <About />
      <Experience />
    </div>
  )
}

export default App
