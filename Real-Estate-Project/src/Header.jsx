import React, {useEffect, useState} from 'react'
import logo from '../public/logo.png'
import { HiMenu } from 'react-icons/hi'
import './Header.css'
import Nav from './Nav'
const Header = () => {
  const [shownav, setShowNav] = useState(false);
  const [sticky, setSticky] = useState(false)
  window.addEventListener('click', ()=>{setShowNav
  (false)});
  window.addEventListener('scroll', ()=>{
    if (window.scrollY > 900){
      setSticky(true)
    }
    else{setSticky(false)}
  })
  return (
    <div>
        <Nav nav={shownav}/>
      <section className={sticky ? 'header-container hide-sticky' : 'header-container'}>
        <div className='small-container innerWidth'>
          <img width={100} src={logo} alt='logo' />
          <div className='h-menu'>
            <a href='#residencies'>Residencies</a>
            <a href='#value'>Our Value</a>
            <a href='#contact'>Contact Us</a>
            <a href='#get-started'>Get Started</a>
            <button className='btn'>
              <a href=''>Contact</a>
            </button>
          </div>
          <HiMenu className='navbar' color='white' size={30} onClick={(e)=>{e.stopPropagation();setShowNav(!shownav)}}/>
        </div>
      </section>
    </div>
  )
}

export default Header
