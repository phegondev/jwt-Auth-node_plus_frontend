import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile'
import './App.css'

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const authenticate = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log(token)
      if (token) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }

    } catch (err) {
      console.log(err)
      setLoggedIn(false)
    }
  }


  useEffect(() => {
    authenticate();
  }, []);

  const handleLogout = () =>{
    localStorage.removeItem('token');
    setLoggedIn(false);
  }


  return (
    <BrowserRouter>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;