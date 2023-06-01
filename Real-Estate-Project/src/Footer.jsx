import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section>
      <div className='footer-wrapper'>
        <div className='footer-container'>
          <div className='left-footer'>
            <img width={100}  src='../public/logo2.png' alt='logo' />
            <p>
              Our vision is to make all people <br />
              the best place to live for them.
            </p>
          </div>
          <div className='right-footer'>
            <h2>Information</h2>
            <p> 145 New York, FL 5467, USA</p>
            <div>
              <p><a href='#residencies'>Property</a></p>
              <p>Services</p>
              <p>Product</p>
              <p>About Us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
