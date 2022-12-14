//import logo from './logo.svg';
// import './App.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState,useEffect } from "react";
import Signup from '../pages/signup';
import Login from '../pages/Login';
import Home from '../pages/Home';
// import Main from './component/main';
import Bagsw from '../pages/women/Bags';

import Clothw from '../pages/women/Clothing';
import Jewleryw from '../pages/women/Jewlery';
import Shoesw from '../pages/women/Shoes';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function Routing() {
  


  
  
  return (
    <>
   
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={<Login/> } />
        <Route path="/bagsw" element={<Bagsw/> } />
        <Route path="/clothw" element={<Clothw/> } />
        <Route path="/jewleryw" element={<Jewleryw/> } />
        <Route path="/shoesw" element={<Shoesw/> } />
        
        
      </Routes>
      </BrowserRouter>
      

    </div>
    </>


  );
}

export default Routing;
