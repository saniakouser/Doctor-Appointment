import React from 'react'
import img from "./doctorimg2.jpg"
import "./DoctorFront.css"

export default function HomeFront() {
  return (
    <div>
      <div className='main-container'>
        <div className="content"><div className="heading">
            Healthier<span>Choice</span><br />For<span>a Healthier you</span>
            <br />
            <p>Our curriculum is bases in providing actual dieting routine</p>
            <button type="button" class="learn-more">Learn more</button>
            </div>
            <div className="doctor-advice"><div className="doctor-heading">Get Advice Regularly</div>
            <div className="subscribe"><button className='get-subscription'>Subscribe</button></div></div>
            </div>
        <div className="banner"><img src={img} alt="" /></div>
      </div>
    </div>
  )
}
