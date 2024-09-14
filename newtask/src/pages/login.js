import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
  const navigate = useNavigate();


function handleLogin () {
   
    navigate('/home');
  };
  return (
    <div>
    <h2>Login</h2>
    <form >
      <label>Email:</label>
      <input type="email" value={email} placeholder='enter your email'  onChange={(e) => setEmail(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </form>
  </div>
  )
}
