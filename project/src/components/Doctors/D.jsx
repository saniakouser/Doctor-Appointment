import React from 'react';
import "./D.css";
import img1 from "./img/icon...png";
import img2 from "./img/videocalll.svg"

export default function D() {
  return (
    <>
    <div className="doctor-container">
    <div className="search-doctor">
     <div className="search-bar">
         <div className="search">
         <i className='logo fas fa-stethoscope'></i>

         <input type="text" name="search" id="" placeholder='Search Doctor here' />
         </div>
         </div>
         <div className="doctor-info-data">
             <h1><span> Romedo Service</span></h1>
             <div className="appointment-container">
              <p className='info-data'> <img src={img2} alt="" />HOW TO CONSULT A DOCTOR ONLINE VIA <span>TEXT/AUDIO/VIDEO</span></p>
              <i class="fas fa-user-md"><p>Choose the doctor</p></i>
              <i class="fas fa-credit-card"><p>Make payment</p></i>
              <i class="fas fa-comments"><p>Follow Up via text - Valid upto 7 days</p></i> 
              <i class="fas fa-mobile-alt"><p>Be present in the consult room on apollo247.com at the time of consult</p></i> 
              <i class="fas fa-calendar-alt"><p>Book a slot</p></i>
             </div>
         </div>
     

     </div>

    
     </div>
    
    </>
  )
}
