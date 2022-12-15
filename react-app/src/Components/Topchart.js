
import React from "react";
import Hello3 from "./../homep.jpg";
import {Link} from 'react-router-dom';

const Toppic = () => {
    return (
        <div>
            <div className="bg-primary mt-0">
    
    <div className="row align-items-center ml-4">

     <div className="col-md-6 ">
 
     <h1 className="display-4 text-white font-weight-bold mx-auto  p-4">Welcome to TheOnlineMall</h1>
     
     <p className="text-white-50 mb-4 lead  mx-auto font-weight-bold  p-4">we have exculsive offer for you <br/> Let's Grow together</p>
     <br/>
     <div className="p-4">
         <Link to="/signup" className="btn btn-success btn-lg "  role="button">Register as Buyer</Link>
         <a className="btn btn-light btn-lg mr-4" href="#" role="button">Register as Seller</a>
     </div>
     </div>
     <div class="col-md-6 ">
         <img src={Hello3} alt="image" className="img-fluid"/>
     </div>


 </div>
    
   </div>
        
        </div>
    );
}
export default Toppic;














