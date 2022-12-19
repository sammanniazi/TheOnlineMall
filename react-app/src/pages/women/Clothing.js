
import React from 'react';

import { useState } from "react";
import Header from '../../Layouts/Header';

import Footer from '../../Layouts/Footer';


//import Cardhome from '../../Components/card';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Cardtry from './clothingcard';
import LocalDataHandler from "../../localData/local";










function Clothw(props) {


  const [cart, setCart] = useState(LocalDataHandler.cart);

  const AddToCart = (item) => {
    console.log("Fn Call");
    let tempCart = cart;
    tempCart.push(item);
    setCart([...tempCart]);
    LocalDataHandler.cart = tempCart;
    console.log(LocalDataHandler.cart);
  };


  return (
    <>




      <Header cart={cart} />



      <br></br>
      <div id="example-div" class="  d-flex aligns-items-center justify-content-center" style={{ maxHeight: '100px' }}>
        <h1>women Shoes</h1>
      </div>

      <Cardtry AddToCart={AddToCart} />




      <Footer />

    </>


  );
}

export default Clothw;
