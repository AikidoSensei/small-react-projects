import React from 'react'
import './Contact.css'
import ContactImage from '../public/r2.png'
import { HiPhone, HiMail, HiVideoCamera, HiChat } from 'react-icons/hi'
const Contact = () => {
  return (
    <section id='contact'className='contact-wrapper'>
      <div className='contact-container'>
        <div className='left-contact'>
          <div className='value-text'>
            <h3>Our Contact</h3>
            <h2>Just a click away!</h2>
            <p>
              We offer 24/7 customer care services <br />
              Feel free to contact us on any of the contact provided below.
            </p>
          </div>
          <div className='c-container'>
           <div className="contact">
            <div>
             <div className="logo-btn">
              <HiPhone color={'royalblue'}/>
             </div>
             <div className="f-detail">
              <h4>Call</h4>
              <p>010 231 789 67</p>
             </div>
            </div>
            <button className="contact-btn">Call now</button>
           </div>
           <div className="contact">
            <div>
             <div className="logo-btn">
              <HiChat color={'royalblue'}/>
             </div>
             <div className="f-detail">
              <h4>Chat</h4>
              <p>010 231 789 67</p>
             </div>
            </div>
            <button className="contact-btn">Chat</button>
           </div>
           <div className="contact">
            <div>
             <div className="logo-btn">
              <HiVideoCamera
               color={'royalblue'}/>
             </div>
             <div className="f-detail">
              <h4>Video call</h4>
              <p>010 231 789 67</p>
             </div>
            </div>
            <button className="contact-btn">Call now</button>
           </div>
           <div className="contact">
            <div>
             <div className="logo-btn">
              <HiMail color={'royalblue'}/>
             </div>
             <div className="f-detail">
              <h4>Message</h4>
              <p>010 231 789 67</p>
             </div>
            </div>
            <button className="contact-btn">Message</button>
           </div>

          </div>
        </div>
        <div className='right-contact'>
          <img src={ContactImage} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Contact
