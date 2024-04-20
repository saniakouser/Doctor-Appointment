import React, { useState } from 'react';
import"./forgot.css";
import axios from "axios"
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleForgotPassword = async() => {
    try {
      
      const response = await axios.post('http://localhost:8080/forget', {
        email
      });

      if (response.data.success) {
        console.log(email)
        setMessage(`Password reset instructions sent to ${email}`);
      } else {
        setMessage('sent email failed. Please try again.');
      }
    } catch (error) {
      console.error('error:', error);
      setMessage('failed. Please try again.');
    }
   
  };
  return (
    <div className='forget'>
      <h2>Forgot Password</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br/>
        <button type="button" onClick={handleForgotPassword}>
          Reset Password
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default ForgotPassword;
