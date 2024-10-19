import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>    
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        {/* <Route path='*' element={<NotFound/>}/>      */}
      </Routes>    
    
    <Footer/>
    </>
  )
}

export default App
