import React, {useState, useEffect} from 'react'

const Countup = ({start, end, speed}) => {
 const number = start;
const [num, setNum] = useState(number)
 let timer;
  useEffect(() => {
   if (num <= end) {
     timer = setInterval(() => {
       counter()
     }, speed)
     return () => {
       clearInterval(timer)
     }
   }
  })
  const counter = () => {
    setNum(Math.floor(speed < 1 ? num + 8 : num + 1 ))
    return num - 8
  }

  return (
      <h1 className='count-style'>{num.toLocaleString()}</h1>
  )
}

export default Countup
