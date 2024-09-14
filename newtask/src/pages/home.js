import React from 'react'

import {Link } from 'react-router-dom';
import {useContext} from 'react';
import { UserContext } from '../context/usercontext';

export default function Home() {
  const { userData } = useContext(UserContext);
 


  return (
    <div style={{padding:"5%"}}>
        <div style={{display:"flex",justifyContent:'flex-end'}}>
        <Link to="/profile" >
          Profile
        </Link>
        </div>
       
      <h2>Welcome to Home Page</h2>

      <div>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Address:</strong> {userData.address}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
      </div>
    </div>
  )
}
