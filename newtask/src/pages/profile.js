import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Profile() {
    const location = useLocation();  
    const { name, email } = location.state;

    const [username, setUsername] = useState(name);
    const [userEmail, setUserEmail] = useState(email);

    const handleSubmit = () => {
  
        console.log('Updated Username:', username);
        console.log('Updated Email:', userEmail);
      };
  return (
    <div style={{padding:"5%"}}>
    
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h2> {name}</h2>
    <h2> {email}</h2>
    </div>

    <div>
      
        <div>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
          </label>
        </div>

        <button onClick={handleSubmit}>Submit</button>
        </div>

       
   
  </div>
  )
}
