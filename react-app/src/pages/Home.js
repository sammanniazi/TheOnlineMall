
import React from 'react';


import Header from '../Layouts/Header';

import Footer from '../Layouts/Footer';
import Topchart from '../Components/Topchart';
import Bestseller from '../Layouts/category_cards/bestsellercard';
import NewsLetter from '../Components/newsletter';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";












function Home() {
  


  
  
  return (
    <>
   
   


   <Header/>
   <Topchart/>
   

   <br></br>
   <div id="example-div" class="  d-flex aligns-items-center justify-content-center"    style={{ maxHeight: '100px'}}>
      <h1>Best Seller Dresses</h1>
 </div>



        <Bestseller />
        <hr/>

        <NewsLetter/>

<br/>
<hr/>
     
   <Footer/>

    </>


  );
}

export default Home;
