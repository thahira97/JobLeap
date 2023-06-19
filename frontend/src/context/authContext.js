import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const signup = async(input) => {
    const res = await axios.post("http://localhost:8080/api/auth/signup", input);
    setCurrentUser(res.data);
  };

  const login = async(input) => {
    const res = await axios.post("http://localhost:8080/api/auth/login", input);
    setCurrentUser(res.data);
  };

  const logout = async(input) => {
    await axios.post("http://localhost:8080/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}