import React from 'react';
import "./Homemid.css"
import image from "./about.jpg";
import pic1 from "./Screenshot (98).png";
import pic2 from "./Screenshot (99).png";
import pic3 from "./Screenshot (100).png";
import pic4 from "./emergency.png"

export default function HomeMid() {
  return (
    <div>
     <div className="Container">
        <div className="image">
           <img src={image}alt="" />
        </div>
        <div className="data">
               <h3 className='head-1'>About Us</h3>
               <p className='content'>Best Medical Care For Yourself and Your Family</p>
               
               <p className="sania">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
               <div className="facility">
                <div className="facility1"><img src={pic1} alt="" style={{marginBottom:'30px'}} /><img src={pic2} alt=""/></div>
                <div className="facility2"><img src={pic3} alt="" /><img src={pic4} alt="" /></div>
               </div>
        </div>
     </div>
    </div>
  )
}
// <div className="facility-1"><img src={pic1} alt="" /></div>
{/* <div className="facility-2"><img src={pic2} alt="" /></div>
<div className="facility-3"><img src={pic3} alt="" /></div>
<div className="facility-4"><img src={pic4} alt="" /></div> */}

