import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className="footer-container">

        <div className="get-in-touch"><p className='get'>GET IN TOUCH</p><p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
         <div className="address">
         <i class="fa-solid fa-location-dot">adress</i>
         <i class="fa-solid fa-phone">telephone</i>
         </div>
        </div>
        <div className="quick-links"><p className='get'>QUICK LINKS</p><Link to="/home">Home</Link>
        <Link to="/home">About</Link>
        <Link to="/home">ContactUs</Link>
        <Link to="/home">Doctorinfo</Link>
        </div>
        <div className="popular-links">
        <p className='get'>POPULAR LINKS</p>
        <Link to="/home">About</Link>
        <Link to="/home">ContactUs</Link>
        <Link to="/home">Doctorinfo</Link>
        </div>
        <div className="newsletter"><input type="email" name="" id="" placeholder='give your email...' />
        <h1>Follow us</h1>
        <div className="footer-social">
            <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </div>

        </div>
    </div>
    
    </> 
  );
};

export default Footer;

