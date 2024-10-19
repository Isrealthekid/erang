import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials'
import Team from './components/team/Team'
import Cta from './components/cta/Cta'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>    
    <Navbar/>
    <Hero/>
    <About/>
    <Testimonials/>
    <Team/>
    <Cta/>
    <Footer/>
    </>
  )
}

export default App
