import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import Companies from './Companies'
import Carousel from './Carousel'
import OurValue from './OurValue'
import Nav from './Nav'
import Contact from './Contact'
import GetStarted from './GetStarted'
import Footer from './Footer'
function App() {
  return (
    <div className='App'>
      <Header/>
      <Hero />
      <Companies />
      <Carousel />
      <OurValue />
      <Contact />
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default App
