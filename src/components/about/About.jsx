import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import {aboutImage,aboutImage2} from '../../assets/index'

const About = () => {
  return (
    <section className='about-section'>
      <div className="about-header">
        <h2>About Us</h2>
        <h3>Empowering the Next Generation of Engineers</h3>        
      </div>
      <article className='about-container'>
        <div className="about-card">
          <p>
              Engineering Resource Academy (ERA) was founded by a group of passionate engineers and educators who recognized the need for hands-on training and industry exposure. Our team combines expertise in engineering, education, and industry partnerships to create a unique program that benefits both students and industry partners.
                <Link>
                  <p className='learn-more'>Learn more...</p>
                </Link>                
            </p>
        </div>

        <div className="image-card">
          <img src={aboutImage} alt="" />

          <img src={aboutImage2} alt="" />

        </div>
    
      </article>
    </section>
  )
}

export default About