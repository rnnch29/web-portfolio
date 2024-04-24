import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Content from './components/Content'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  )
}

export default App
