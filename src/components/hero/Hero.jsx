import React from 'react'
import './Hero.css'
import { heroImage, } from '../../assets/index'


const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='left-side'>
          <div className='hero-text'>
            <h1>
              Bridging The Gap  <br/>Between
              <span> Training</span> <br /> and <span>Development</span>
            </h1>
            <h3>
              Connecting Students to Real-World Engineering Experience             
            </h3>            
          </div>
          <button><a href="">Join Us Today</a></button>         
      </div>

      <div className="right-side">
        <div className="hero-image">
          <img src={heroImage} alt="hero" />
        </div>

      </div>
    </section>
  )
}

export default Hero