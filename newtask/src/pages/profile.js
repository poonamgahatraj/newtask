import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState ,useContext} from 'react';
import { UserContext } from '../context/usercontext';

export default function Profile() {
  const { userData, setUserData } = useContext(UserContext);
    const navigate =useNavigate()
  

    const [username, setUsername] = useState(userData.name);
    const [userEmail, setUserEmail] = useState(userData.email);

    const handleSubmit = () => {
      setUserData((prevData) => ({
        ...prevData,
        name: username,
        email: userEmail,
      }));
    };

      function backToHome(){
        navigate('/home');
      }
  return (
    <div style={{padding:"5%"}}>
        <button onClick={backToHome}> back to Home</button>
    
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h2>{userData.name}</h2>
    <h2>{userData.email}</h2>
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
