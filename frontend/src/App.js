import React, { useEffect } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Myinfo from './Components/Myinfo/Myinfo';
import About from './Components/About/About';
import { Routes, Route } from "react-router-dom"
import Education from './Components/Education/Education';
import User from './Components/User/User';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import axios from 'axios';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Myinfo />} />
        <Route path="HOME" element={<Myinfo />} />
        <Route path="ABOUT US" element={<About />} />
        <Route path="EDUCTION" element={<Education />} />
        <Route path="USER" element={<User />} />
        <Route path="CONTACT US" element={<Contact />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
