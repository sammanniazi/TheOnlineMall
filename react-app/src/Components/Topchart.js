
import React from "react";
import Hello3 from "./../homep.jpg";
import {Link} from 'react-router-dom';

const Toppic = () => {
    return (
        <>
            <div className="bg-primary row align-items-center mt-0  mb-0">
    
  

     <div className="col-md-6 ">
 
     <h1 className="display-4 text-white font-weight-bold mx-auto  p-4">Welcome to TheOnlineMall</h1>
     
     <p className="text-white-50 mb-4 lead  mx-auto font-weight-bold  p-4">we have exculsive offer for you <br/> Let's Grow together</p>
     
     <div className="p-4">
         <Link to="/signup" className="btn btn-success btn-lg "  role="button">Register as Seller</Link>
       
     </div>
     </div>
     <div className="col-md-6">
         <img src={Hello3} className="img-fluid" alt="image" />
     </div>


 
    
   </div>
        
        </>
    );
}
export default Toppic;














