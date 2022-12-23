//import logo from './logo.svg';
// import './App.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState,useEffect } from "react";
import Signup from '../pages/signup';
import Login from '../pages/Login';
import Home from '../pages/Home';
// import Main from './component/main';

// for women category
import Bagsw from '../pages/women/Bags';

import Clothw from '../pages/women/Clothing';
import Jewleryw from '../pages/women/Jewlery';
import Shoesw from '../pages/women/Shoes';


//for men category 

import Clothm from '../pages/Men/clothing';
import Shoesm from '../pages/Men/shoes';
import Bagsm from '../pages/Men/bags';


// for kids
import Kidsc from '../pages/Kids/clothing';
import Kidss from '../pages/Kids/shoes';
import KidsB from '../pages/Kids/bags';

import  Billform from  '../pages/Cart/Billingform'

//add to cart
import Addtocart from '../pages/Cart/addtocard';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deals from "../pages/Deals/todaydeals";


//dashboard

import Sidebar from "../Dashboard/sidebar"

import WomenDressForm from "../Dashboard/women/adddress";

import WommenShoesForm from "../Dashboard/women/addshoes";
import WommenBagsForm from "../Dashboard/women/addbags";
import WommenJewleryForm from "../Dashboard/women/addjewlery";

import MenShoesForm from "../Dashboard/Men/addshoes";
import MenBagsForm from "../Dashboard/Men/addbags";
import MenDressForm from "../Dashboard/Men/adddress";


import KidShoesForm from "../Dashboard/Kids/addshoes";
import KidBagsForm from "../Dashboard/Kids/addbags";
import KidDressForm from "../Dashboard/Kids/adddress";


import Auth from "../Components/auth";














function Routing() {





  return (
    <>

      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path="/bagsw" element={<Bagsw />} />
            <Route path="/clothw" element={<Clothw />} />
            <Route path="/jewleryw" element={<Jewleryw />} />
            <Route path="/shoesw" element={<Shoesw />} />


            <Route path="/bagsm" element={<Bagsm />} />
            <Route path="/clothm" element={<Clothm />} />
            <Route path="/shoesm" element={<Shoesm />} />

            <Route path="/kidsbag" element={<KidsB />} />
            <Route path="/kidscloth" element={<Kidsc />} />
            <Route path="/kidsshoes" element={<Kidss />} />






            <Route path="/addtocart" element={<Addtocart />} />
            
            <Route path="/billingform" element={<Billform />} />

            <Route path ="/deals" element={<Deals/>}/>

            <Route path="/admin" element={<Auth><Sidebar/> </Auth> } />

           

            <Route path ="/addwomendress" element={<WomenDressForm/>}/>

            <Route path ="/addwomenshoes" element={<WommenShoesForm/>}/>
            <Route path ="/addwomenbags" element={<WommenBagsForm/>}/>
            <Route path ="/addwomenjewlery" element={<WommenJewleryForm/>}/>

            <Route path ="/addmenshoes" element={<MenShoesForm/>}/>
            <Route path ="/addmenbags" element={<MenBagsForm/>}/>
            <Route path ="/addmendress" element={<MenDressForm/>}/>

            <Route path ="/addkidsshoes" element={<KidShoesForm/>}/>
            <Route path ="/addkidsbags" element={<KidBagsForm/>}/>
            <Route path ="/addkidsdress" element={<KidDressForm/>}/>












          </Routes>
        </BrowserRouter>


      </div>
    </>


  );
}

export default Routing;
