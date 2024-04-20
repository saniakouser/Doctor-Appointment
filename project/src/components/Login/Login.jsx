import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import axios from "axios";
import img from "./logindoctor.jpg";
import Google from './Google';


const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    try {
      e.preventDefault()
      const response = await axios.post('http://localhost:8080/login', {
        username,
       password
      });

      if (response.data.success) {
        console.log("we are checking")
      } 
    } catch (error) {
      console.error('login error:', error);
    }}

  const responseGoogle = (response) => {
    // Handle Google login response
    console.log(response);
  };

  return (
    <>
    
    <div className="container">
    
    <div className="login-container">
         <i>Romedo</i>
      <h2>Login</h2>
      <form onSubmit={handleLogin} action='/login' method='post'>
        <label>
          Username:
          <input
            type="text"
            value={username} name='username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password} name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className='submit'>
          Login
        </button>
        <br />
        <div className="google-login">
          <p>Or log in with Google:</p>
          <Google/>
        
        </div>
        <div className="forgot-password">
            <Link to="/forget">Forgot Password?</Link>
        </div>
      </form>
    </div>
    
    </div>
    </>
  );
};

export default Login;
