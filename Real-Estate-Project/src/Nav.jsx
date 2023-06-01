import React from 'react'
import './Nav.css'
const Nav = ({nav}) => {
  return (
    <div className={nav ? 'nav-container show-nav' : 'nav-container'}>
      <div className='navs '>
        <a href='#residencies'>Residencies</a>
        <a href='#value'>Our Value</a>
        <a href='#contact'>Contact Us</a>
        <a href='#get-started'>Get Started</a>
        <button className='btn'>
          <a href=''>Contact</a>
        </button>
      </div>
    </div>
  )
}

export default Nav
