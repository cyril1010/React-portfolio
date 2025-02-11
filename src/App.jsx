import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topnavbar from './pages/Topnavbar'
import Home from './pages/Home'
import About from './pages/About'
import Qualification from './pages/Qualification'
import Services from './pages/Services'
import Skills from './pages/Skills'
import Contact from './pages/Contact'


function App() {

  const user = {
          "Name":"Cyril K U",
          "Place":"Alappuzha",
          "Age":23,
          "Mobile":7907188859,
          "Email":"cyril.k.u.2002@gmail.com",
          "Skills":"Python | Django | React | SQL | Bootstrap",
          "Languages":"English - Malayalam - Hindi"
      }

  return (
    <>
      <Topnavbar />
      <Home />
      <About user={user} />
      <Skills />
      <Services />
      <Qualification />
      <Contact />

      
    </>
  )
}

export default App
