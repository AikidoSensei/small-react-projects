import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import HeroImage from '../public/hero-image.png'
import './Hero.css'
import Countup from './Countup'
import Nav from './Nav'

const Hero = () => {
 return (
   <div className='hero-wrapper '>
     <div className='blur' />
     <div className='hero-container innerWidth'>
       <div className='left-hero'>
         <div className='orange-ball' />
         <h1 className='title'>
           Discover
           <br /> Most Suitable <br /> Property
         </h1>
         <p>
           Find a variety of properties that suit you very easily <br /> Forget
           all difficulties in finding a residence for you
         </p>
         <div className='search-bar'>
           <HiLocationMarker color='var(--blue)' size={25} />
           <input type='text' />
           <button className='btn'>
             <a href=''>Search</a>
           </button>
         </div>
         <div className='stats-container'>
           <div className='stats'>
             <span>
               <Countup start={8950} end={9000 - 8} speed={70} />
               <span>+</span>
             </span>
             <span>Premium Products</span>
           </div>
           <div className='stats'>
             <span>
               <Countup start={1950} end={2000 - 8} speed={70} />
               <span>+</span>
             </span>
             <span>Happy Customers</span>
           </div>
           <div className='stats'>
             <span>
               <Countup start={0} end={29 - 1} speed={90} />
               <span>+</span>
             </span>
             <span>Award Winning</span>
           </div>
         </div>
       </div>
       <div className='right-hero'>
         <div className='hero-img'>
           <img src={HeroImage} alt='' />
         </div>
       </div>
     </div>
     {/* <div className='blur-hero' /> */}
   </div>
 )
}

export default Hero
