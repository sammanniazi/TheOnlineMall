import React, { useState } from "react";

import Header from "../Layouts/Header";

import Footer from "../Layouts/Footer";
import Topchart from "../Components/Topchart";
import Bestseller from "../Layouts/category_cards/bestsellercard";
import NewsLetter from "../Components/newsletter";
import LocalDataHandler from "../../src/localData/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Dealscard from "../pages/Deals/dealscategories"

function Home() {
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
      <Topchart />

      <br></br>
      <div
        id="example-div"
        class="  d-flex aligns-items-center justify-content-center"
        style={{ maxHeight: "100px" }}
      >
        <h1>Best Seller Dresses</h1>
      </div>

      <hr/>
      <Bestseller AddToCart={AddToCart} />

      <br/>
      <hr/>
      <Dealscard/>
 

     

      <br />
      <hr />

      <Footer />
    </>
  );
}

export default Home;
