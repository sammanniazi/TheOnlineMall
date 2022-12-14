
import React from "react";
import Hello3 from "./../homep.jpg";

const Toppic = () => {
    return (
        <div>
            <div className="bg-primary mt-0">
    
    <div className="row align-items-center ml-5">

     <div className="col-md-6 ">
 
     <h1 className="display-4 text-white font-weight-bold">Welcome to TheOnlineMall</h1>
     
     <p className="text-white-50 mb-4 lead">we have exculsive offer for you <br/> Let's Grow together</p>
     <br/>
     <div className=""row>
         <a class="btn btn-success btn-lg" href="#" role="button">Register as Buyer</a>
         <a class="btn btn-light btn-lg" href="#" role="button">Register as Seller</a>
     </div>
     </div>
     <div class="col-md-6 fluid-img">
         <img src={Hello3} alt="image" style={{ width: 900, height: 600 }}/>
     </div>


 </div>
    
   </div>
        
        </div>
    );
}
export default Toppic;














