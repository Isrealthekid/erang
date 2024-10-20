import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import { eraLogo,facebook,instagram,twitter } from '../../assets/index'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='logo'>
        <img src={eraLogo} alt="" />
      </div>

      <div className="quick-links">
        <h4>Quick  Links</h4>
        <li>
          <NavLink to='/' className="link">
              <a>HOME</a>
          </NavLink>
          <NavLink to='/about' className="link">
              <a>ABOUT</a>
          </NavLink>

          <NavLink to='/contact' className="link">
              <a>CONTACT</a>
          </NavLink>

          <NavLink to='/blog' className="link">
              <a>BLOG</a>
          </NavLink>
        </li>

      </div>

      <div className="social-media">
        <h4>Follow Us</h4>
        <div className="social-links">

        <p>
         <img src={facebook} alt="facebook" />
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            FACEBOOK
          </a> 
        </p>

          <p>
          <img src={instagram} alt="instagram" />
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            INSTAGRAM           
          </a>
          </p>

          <p>
            <img src={twitter} alt="twitter" />
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              TWITTER            
            </a>
          </p>
        </div>
      </div>

      <div className="contacts">
        <h4>Contacts</h4>
        <p>Engineering Resource Academy</p>
        <p>3rd Floor, Osheopy Plaza</p>
        <p>Ikeja, Lagos State</p>
        <p><a href="tel:+234-123-456-789">+234-123-456-789</a></p>
        <p><a href="mailto:engineeringresourcesacademy@gmail.com">engineeringresourcesacademy@gmail.com</a></p>        
      </div>


    </footer>
  )
}

export default Footer