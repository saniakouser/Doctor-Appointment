import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from './DoctorData'; // Import your data file
import './Doctor.css'; // Import your CSS file
import { Link } from 'react-router-dom';

export default function DoctorProfile() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <h3 className='service-head'>Service</h3>
    <h1 className='service-head2'>OUR BEST DOCTORS</h1>
    <div className='sania'>
    <div className="doctor-profile">
       <Slider {...settings}> 
        {data.map((d) => (
          <div key={d.id} className="doctor-slide">
            <div className="img">
              <img src={d.img} alt={`Dr. ${d.doctorname}`} />
            </div>
            <div className="specialisation-data">
              <p className='doctor-name'>{d.doctorname}</p>
              <p><b>Specialisation:</b>{d.Specialisation}</p>
              <p> <b>About:</b>{d.About}</p>
                <div className="ink"><Link to="/path">Book Your Slot</Link></div>
            </div>
            
          </div>
        ))}
       </Slider> 
    </div>
    </div>
    </>
  );
}

