import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css' 
import{RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { eraLogo, } from '../../assets/index'

const Navbar = () => {

    const [hamburger, setHamburger] = useState(false)

  return (
    
    <div className='nav-container' >
      <img src={eraLogo} alt="logo"  className='logo'/>

      <ul className="nav-links-container">

        <NavLink to='/' className="link">
            <p>HOME</p>
        </NavLink>

        <NavLink to='/about' className="link">
            <p>ABOUT</p>
        </NavLink>

        <NavLink to='/contact' className="link">
            <p>CONTACT</p>
        </NavLink>

        <NavLink to='/blog' className="link">
            <p>BLOG</p>
        </NavLink>


      </ul>

      <div className="support-links">
         <Link to='/contact' className='link'>
            <p className="">Support</p>
          </Link>
          <div></div>
            
          <Link to='/contact' className='link'>
            <p className="">Register</p>
          </Link>

          {/* <img onClick={()=>setHamburger(true)} src="" className='' /> */}
      </div>

    {/* sidebar/hamburger menu for small screen  */}

      <div className="hamburger-menu">
      {hamburger 
        ? <RiCloseLine color="#fff" size={27}  onClick={() =>  setHamburger(false)}/>
        : <RiMenu3Line color="#fff" size={27}  onClick={() =>  setHamburger(true)}/>

      }

      {hamburger && (
        <div className="hamburger-menu-links">
          <NavLink to='/' className="link" onClick={() =>  setHamburger(false)}>
              <p>HOME</p>
          </NavLink>

          <NavLink to='/' className="link" onClick={() =>  setHamburger(false)}>
              <p>ABOUT</p>
          </NavLink>

          <NavLink to='/' className="link" onClick={() =>  setHamburger(false)}>
              <p>CONTACT</p>
          </NavLink>

          <NavLink to='/' className="link" onClick={() =>  setHamburger(false)}>
              <p>BLOG</p>
          </NavLink>
        </div>
      )

      }

        
      </div> 

          
   

</div>
  )
}

export default Navbar