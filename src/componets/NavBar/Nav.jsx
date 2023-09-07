import React from 'react';
import './nav.css';
import logo from './images/logo.png';

function Nav() {
    return (
        <>
            
            <nav className='navbar'>
          <ul className='ul'>
                    <li><a href="#">Home</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="#">Servies</a></li>
                    <li><a href="#">Express</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">More</a></li>
                    
                    <div>
                       <img src={logo} alt="" className='logo' />
                        
                    </div>
                    <input type="text" placeholder='Search' className='search' />
                </ul>
                </nav>
              

            

            

            </>
  )
}

export default Nav