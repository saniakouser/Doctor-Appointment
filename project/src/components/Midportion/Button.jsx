// Button.jsx
import React, { useState } from 'react';
import '../Css/Button.css';
import { Link } from 'react-router-dom';

 export default function Button({setSelectedclass}) {
  const [isActive, setIsActive] = useState(false);

  const handle = () => {
    setIsActive(!isActive);
    setSelectedclass("submit activecontinue")
  };

  const buttonClass = `button-link ${isActive ? 'active' : ''}`;

  return (
    <div>
      <button type="button" className={buttonClass} onClick={handle}>
        hello
      </button>
    </div>
  );
}






