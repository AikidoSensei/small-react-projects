import React, { useRef, useState, useEffect } from 'react'
import './Carousel.css'
import slider from './utils/slider.json'

const Carousel = () => {
 const ref = useRef(null)
 const next = useRef(null)
 const prev = useRef(null)
 let clicked
 let startX
 let scrollLeft
 const [carouselBtn, setCarouselBtn] = useState(0)
  /* CAROUSEL NEXT BUTTON */
  useEffect(()=>{
   const forward = next.current;
   const previous = prev.current;
   const screen = ref.current;
   forward.addEventListener('click', (e)=>{
   screen.scrollBy(250, 0);
   })
   previous.addEventListener('click', (e)=>{
    screen.scrollBy(-250, 0)
   })
  },[])
  useEffect(() => {
    /* MOUSEDOWN EVENT */
    const screen = ref.current
    screen.addEventListener('mousedown', (e) => {
      e.preventDefault()
      clicked = true
      startX = e.pageX - screen.offsetLeft
      scrollLeft = screen.scrollLeft
    })

    /* MOUSEMOVE EVENT */
    screen.addEventListener('mousemove', (e) => {
      if (!clicked) return
      e.preventDefault()
      const x = e.pageX - screen.offsetLeft
      const displacement = x - startX
      screen.scrollLeft = scrollLeft - displacement
    })
    /* MOUSELEAVE EVENT */
    screen.addEventListener('mouseleave', () => {
      clicked = false
    })

    /* MOUSEUP EVENT */
    screen.addEventListener('mouseup', () => {
      clicked = false
    })
  }, [])

  return (
    <div id='residencies' className='carousel-wrapper'>
      <section className='carousel-container'>
        <div className='carousel-heading'>
          <h4>Best Choices</h4>
          <h3>Popular Residencies</h3>
        </div>
        <div className='main-carousel' ref={ref}>
          <div className='carousel-btns'>
            <button ref={prev}>‹</button>
            <button ref={next}>›</button>
          </div>
          {slider.map((slide, index) => {
           const {name, price, detail, image} = slide;
            return (
              <div className='carousel' key={index}>
                <img src={image} alt='' />
                <div>
                  <span>$</span>
                  <span>{price}</span>
                </div>
                <div className='area-details'>
                  <h4>{name}</h4>
                  <p>{detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Carousel
