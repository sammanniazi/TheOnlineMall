//import logo from './logo.svg';
// import './App.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState,useEffect } from "react";
import React from 'react';

import Header from  "../Layouts/Header"
import Footer from  "../Layouts/Footer"


import { Link ,Navigate, useNavigate } from "react-router-dom";




function Error() {



    const navigate = useNavigate();
    
  


  
  return (
    <>
   <Header/>
   <div className="container mt-5 w-25 border p-5 shadow bg-white rounded">

     <h1>Server is Down.Please wait to resume server working</h1>





</div>
<Footer/>

      

   
    </>


  );
}

export default Error;
