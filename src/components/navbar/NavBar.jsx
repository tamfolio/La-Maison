import React from 'react'
import './navbar.scss'

function NavBar() {
  return (
        <nav className="navBar">
          <div className="logo d-flex">
            <img src="/assets/logo.png" alt="" className='mr-1' />
            <p className='logo-name'>La Maison</p>
          </div>
          <div className="links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Agents</a></li>
              <li><a href="/">Properties</a></li>
            </ul>
          </div>
          <button className="cta">Find a House</button>
        </nav>
  )
}

export default NavBar