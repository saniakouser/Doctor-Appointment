
import logo from "./images/icon...png"
import { Link } from "react-router-dom"
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
    let Mystyle={
        display:'none'
    }
    const[flag,setflag]=useState(true)
   const[mystyle, setmystyle]=useState(Mystyle);
    const toggleMobileMenu=()=>{
      
        if(flag){
          console.log(flag)
          setflag(false)
           setmystyle({display:'block'})
        
        }
        else{
          console.log(flag)
          setmystyle({display:'none'})
            setflag(true)
        }
        
    }

  return (
    <>
    <div className='Navbar'>
      <div className='navcomp'><img src={logo} alt="" />ROMEDO</div>
      <div className="navcomp"><Link to="/" >Home</Link></div>
      <div className="navcomp"><Link to="/dining" >About</Link></div>
      <div className="navcomp"><Link to="/wedding" >HealthBlog</Link></div>
      <div className="navcomp"><Link to="/gift cards" >Slot</Link></div>
      <div className="navcomp"><Link to="/gift cards" >Login</Link></div>
      
      <div className="navcomp"><button>Book_Appointment</button></div>
    </div>

    <div class="navbar-mob">
     <div class="hamburger-icon" onClick={toggleMobileMenu}>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
  <div class="navcomp-mob"><img src={logo} alt="" style={{height:'50px',width:'50px'}} /></div>
  <div className="button-mob"><button>Book_Slot</button></div>
  <div class="mobile-menu" style={mystyle}>
    <div class="mob-navcomp"><Link to="/" >Home</Link></div>
    <hr />
    <div class="mob-navcomp"><Link to="/dining" >About</Link></div>
    <hr />
    <div class="mob-navcomp"><Link to="/wedding" >HealthBlog</Link></div>
    <hr />
    <div class="mob-navcomp"><Link to="/gift-cards" >Slot</Link></div>
    <hr />
    <div class="mob-navcomp"><Link to="/" ><button>Sign_Up</button></Link></div>
    <hr />
  </div>
</div>

    </>
  )
}
