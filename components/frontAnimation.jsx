'use client';
import React, { useEffect, useState } from 'react'
import '../styles/globals.css'

const FrontAnimation = () => {
  const [remove, setRemove] = useState(false)  
useEffect(() => {
 setInterval(() => {
    setRemove(true)
  }, 2000);
}, [remove])

  return (
    <div className={`pfFrontAni ${remove ? 'left-[-2000px]':'left-0'}`} >
        <h1 className='text-white ani'>Hello,</h1>
        {/* <h2 className='ani'>Welcome To</h2> */}
        <h2 className='ani text-white'>I'm <span className='ani hero-gradient-heading'>Dishank Patel</span><span className='ani hero-gradient-heading'>.</span></h2>
        
    </div>
  )
}

export default FrontAnimation