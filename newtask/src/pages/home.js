import React from 'react'

import {Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const data={
        name: 'John Doe',
        address: '123 Main St, Springfield',
        email: 'john.doe@example.com',
        phoneNumber: '123-456-7890',
    }

    const navigate = useNavigate();

    // const handleProfileClick = () => {
      
    //     navigate('/profile', { state: { name: data.name, email: data.email } });
    //   };
  return (
    <div style={{padding:"5%"}}>
        <div style={{display:"flex",justifyContent:'flex-end'}}>
        <Link to="/profile" state={{ name: data.name, email: data.email }}>
          Profile
        </Link>
        </div>
       
      <h2>Welcome to Home Page</h2>

      <div>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Address:</strong> {data.address}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone Number:</strong> {data.phoneNumber}</p>
      </div>
    </div>
  )
}
