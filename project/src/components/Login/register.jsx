
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from "axios"
import './register.css'

const Registration = (e) => {
  const [userName, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');

  const handleRegistration = async () => {
    try {
      
      const response = await axios.post('http://localhost:8080/register', {
        userName,
        email,
        password,
        address,
        contactNo,
        state,
      });

      if (response.data.success) {
        console.log(userName,contactNo)
        setMessage('Registration successful!');
      } else {
        setMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage('Registration failed. Please try again.');
    }
  };

 

  return (
        <div className="container">
    <div className="registration-container">
      <h2>Registration</h2>
      <form>
        <label>
          User Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
         </label>
        <br />
         <label>
           set_password:
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="text"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
        </label>
        <br />
        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>
      {message && <p>{message}</p>}
      <div className="already-registered">
        <p>Already registered? <Link to="/login">Login here</Link></p>
      </div>
    </div>
    </div>
  );
};

export default Registration;
