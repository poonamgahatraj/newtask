import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const UserContext=createContext()

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: '123 Main St, Springfield',
      phoneNumber: '123-456-7890',
    });
  
    return (
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    );
  };
