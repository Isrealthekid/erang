import React from 'react'
import './Navbar.css' 
import { hamburger,eraLogo } from '../../assets'

const Navbar = () => {
  return (
    <header>
      <nav className='nav'>
        <a className='logo' href="/">
          <img src={eraLogo} alt='Logo' width={130} height={29}/>
        </a>
        <ul className='nav-links'>
          <li className="links">
            <a href="" className='link'>Home</a>
            <a href="" className='link'>About</a>
            <a href="" className='link'>Contact</a>
            <a href="" className='link'>Blogs</a>            
          </li>
        </ul>

        <ul className="support-links">
          <li className='links'>
            <a href="" className='link'>Register</a>
              <div></div>
            <a href="" className='link'>Support</a>
          </li>
        </ul>
        <div className='hamburger'>
          <img src={ hamburger } alt="Hamburger" width={24} height={25} />
        </div>

      </nav>
    </header>
  )
}

export default Navbar