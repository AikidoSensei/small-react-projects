import React, {useState, useReducer} from 'react'
import HeroImage from '../public/r1.png'
import './OurValue.css'
import { HiArrowSmDown } from 'react-icons/hi'
import { HiExclamationCircle } from 'react-icons/hi'
const OurValue = () => {
 const [acordion, setAcordion] = useState({
  acordion1:false,
  acordion2:false,
  acordion3:false,
 })
  return (
    <section id='value' className='value-wrapper'>
      <div className='value-container'>
        <div className='left-value'>
          <img src={HeroImage} alt='' />
        </div>
        <div className='right-value'>
          <div className='right-container'>
            <div className='value-text'>
              <h3>Our Value</h3>
              <h2>Value We Give To You</h2>
              <p>
                We are always ready to provide the best services for you <br />
                We believe a good place to live can make your life better
              </p>
            </div>
            <div className='acordion-container'>
              <div
                className={acordion.acordion1 ? 'acordion show-acordion' : 'acordion'}
              >
                <div className='acordion-header'>
                  <div className='logo-btn'>
                    <HiExclamationCircle color={'royalblue'} />
                  </div>
                  <h4>Best interest rates on the market</h4>
                  <div
                    className='logo-btn'
                    onClick={() =>
                      setAcordion({ acordion2:false, acordion3:false, acordion1: !acordion.acordion1})
                    }
                  >
                    <HiArrowSmDown color={'royalblue'} />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet. Dolore officiis saepe porro ab.
                  Optio ex deleniti laboriosam debitis?
                  <br />
                  Optio quidem earum alias blanditiis. Recusandae officia
                  asperiores deserunt laborum!
                </p>
              </div>
              <div
                className={acordion.acordion2 ? 'acordion show-acordion' : 'acordion'}
              >
                <div className='acordion-header'>
                  <div className='logo-btn'>
                    <HiExclamationCircle color={'royalblue'} />
                  </div>
                  <h4>Prevent unstable prices</h4>
                  <div
                    className='logo-btn'
                    onClick={() =>
                      setAcordion({ acordion1:false, acordion3:false, acordion2: !acordion.acordion2})
                    }
                  >
                    <HiArrowSmDown color={'royalblue'} />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet. Dolore officiis saepe porro ab.
                  Optio ex deleniti laboriosam debitis?
                  <br />
                  Optio quidem earum alias blanditiis. Recusandae officia
                  asperiores deserunt laborum!
                </p>
              </div>
              <div
                className={acordion.acordion3 ? 'acordion show-acordion' : 'acordion'}
              >
                <div className='acordion-header'>
                  <div className='logo-btn'>
                    <HiExclamationCircle color={'royalblue'} />
                  </div>
                  <h4>Best price on the market</h4>
                  <div
                    className='logo-btn'
                    onClick={() =>
                      setAcordion({ acordion1:false, acordion2:false, acordion3: !acordion.acordion3 })
                    }
                  >
                    <HiArrowSmDown color={'royalblue'} />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet. Dolore officiis saepe porro ab.
                  Optio ex deleniti laboriosam debitis?
                  <br />
                  Optio quidem earum alias blanditiis. Recusandae officia
                  asperiores deserunt laborum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurValue
