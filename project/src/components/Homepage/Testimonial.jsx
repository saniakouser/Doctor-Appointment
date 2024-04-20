import { useState } from "react";
import image from "./testimonial-1.jpg";
import image1 from "./testimonial-2.jpg"
import image3 from "./testimonial-3.jpg"
import "./testimonial.css";

export default function Testimonial() {
const  Nonestyle={
      display:'none'
  }
const FlexStyle={
  display:'flex'
}
const trackStyle={
  width:'30px',
  height:'30px',
  borderRadius: '5px!important',
  backgroundColor:'#13C5DD'
}

  const[classStyle1,SetclassStyle1]=useState(Nonestyle)
  const[classStyle2,SetclassStyle2]=useState(FlexStyle)
  const[classStyle3,SetclassStyle3]=useState(Nonestyle)
  const[trackstyle1,Settrackstyle1]=useState()
  const[trackstyle2,Settrackstyle2]=useState(trackStyle)
  const[trackstyle3,Settrackstyle3]=useState()

  const handleDisplay1=()=>{
SetclassStyle1(FlexStyle);
SetclassStyle2(Nonestyle);
SetclassStyle3(Nonestyle);
Settrackstyle1(trackStyle)
Settrackstyle2()
Settrackstyle3()
  }
  const handleDisplay2=()=>{
    SetclassStyle2(FlexStyle);
    SetclassStyle1(Nonestyle);
   SetclassStyle3(Nonestyle);
  Settrackstyle2(trackStyle)
  Settrackstyle1()
  Settrackstyle3()
  }
  const handleDisplay3=()=>{
    SetclassStyle3(FlexStyle);
    SetclassStyle2(Nonestyle);
   SetclassStyle1(Nonestyle);
  Settrackstyle3(trackStyle)
  Settrackstyle1()
  Settrackstyle2()
    
  }





  return (
    <div className='Testimonial'>
        <div className="test-part1">
      <h3 className='head-1'>Testimonial</h3>
      <h1 className="head-2" style={{padding:"5px"}}> Pateint say About</h1>
      <h1 className='head-3 '  style={{padding:"10px"}}>Our Services</h1>
     
      </div>
      <div className="test-part2" style={classStyle1}>
        <div className="user-image"><img src={image} alt="" /></div>
        <div className="user-data"><p>
        This hospital is just fantatastc there are lot of feature in <br />I am so much happy to see you the factor of it
        the facility the these hospital provide me<br />  is excellentwhenver any person would take advice for hospital i would strongly
        recommend them.
        <br />
         <h4>Sania kouser</h4>
        </p>
        </div>
      </div>
       <div className="test-part3" style={classStyle2}>
       <div className="user-image1"><img src={image1} alt="" /></div>
       <div className="user-data1"><p>
        This hospital is just fantatastc there are lot of feature in <br />I am so much happy to see you the factor of it
        the facility the these hospital provide me<br />  is excellentwhenver any person would take advice for hospital i would strongly
        recommend them.
        <br />
         <h4>classic natan</h4>
        </p>
        </div>
        </div>
        <div className="test-part4" style={classStyle3}>
       <div className="user-image2"><img src={image3} alt="" /></div>
       <div className="user-data2"><p>
        This hospital is just fantatastc there are lot of feature in <br />I am so much happy to see you the factor of it
        the facility the these hospital provide me<br />  is excellentwhenver any person would take advice for hospital i would strongly
        recommend them.
        <br />
         <h4>musicania</h4>
        </p>
       </div>
       </div>
       <div className="track">
        <div className="track1"onClick={handleDisplay1} style={trackstyle1}></div>
        <div className="track2" onClick={handleDisplay2} style={trackstyle2}></div>
        <div className="track3"onClick={handleDisplay3} style={trackstyle3}></div>
       </div>
     </div>
  
    
  )
}
