import React from 'react'
 import './mid.css';
 import img from "./Untitled design.png"

export default function mid() {
  return (
    <div>
      <div className="mid-container">
    <div className="middata"><span  className='mid-welcome'>Welcome to Romedo</span>
    <br />
       <span className='best'>BEST</span>
       <br />
       <span className='healthcare'>HEALTHCARE</span>
       <br />
       <span className='solution'>SOLUTION</span>
       <button type="button" className='appoint'>Book Appointment</button>
    </div>
    <div className="mid-banner"><img src={img} alt="" /></div>
      </div>
      <div className="mid-mobile">
      <div className="mobile-middata"><span  className='mobile-mid-welcome'>Welcome to Romedo</span>
    <br />
       <span className='mobile-best'>BEST</span>
       <br />
       <span className='mobile-healthcare'>HEALTHCARE</span>
       <br />
       <span className='mobile-solution'>SOLUTION</span>
       <br />
       <button type="button" className='mobile-appoint'>Book Appointment</button>
    </div>

      </div>
    </div>
  )
}
