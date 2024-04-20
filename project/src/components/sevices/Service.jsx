import React from 'react'
import './service.css';
import img1 from "./Screenshot (98).png"
import img2 from "./Screenshot (99).png"
import img3 from "./Screenshot (100).png"
import img4 from "./emergency.png"
export default function Service() {
  return (
    <div> 
                 <h3 className='service-head'>Service</h3>
                 <h1 className='service-head2'>EXCELLENET MEDICAL SERVICE</h1>
      <div className="mdical-service">
        <div className="service"><img src={img1} alt="" className='service-img' style={{padding:'20px'}} /><div className="service-data">
           <p className='service-para'> We are providing excellent medical qualities we have our best doctor with us.sania is 
           going to build best website</p>
            </div>
            </div>
        <div className="service"><img src={img2} alt="" className='service-img' /><div className="service-data">
        <p className='service-para'> We are providing excellent medical qualities we have our best doctor with us.sania is 
           going to build best website</p>
            </div>
        </div>
        <div className="service"><img src={img2} alt="" className='service-img' /><div className="service-data">
        <p className='service-para'> We are providing excellent medical qualities we have our best doctor with us.sania is 
           going to build best website</p>
            </div>
        </div>
        <div className="service"><img src={img4} alt="" className='service-img' style={{padding:'8px'}} /><div className="service-data">
        <p className='service-para'> We are providing excellent medical qualities we have our best doctor with us.sania is 
           going to build best website</p>
            </div></div>
      </div>
    </div>
  )
}
