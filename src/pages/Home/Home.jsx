import React from 'react'
import "./Home.css"
import Hero  from '../../components/hero/Hero'
import About from '../../components/about/About'
import Testimonials from '../../components/testimonials/Testimonials'
import Team from '../../components/team/Team'
import Cta from '../../components/cta/Cta'

const Home = () => {
  return (
    <>
        <Hero/> 
        <About/>
        <Testimonials/>
        <Team/>
        <Cta/>
    </>
  )
}

export default Home