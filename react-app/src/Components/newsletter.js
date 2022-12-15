
import React from "react";
import Hello4 from "./../happy.jpg";
import {Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";

const newsletter = () => {
    return (
        <div>
            <div className="container  w-35 border p-5 shadow bg-dark rounded mt-0">
    
    <div className="row align-items-center ml-4">

     <div className="col-md-6 ">
 
     <h1 className="display-4 text-white font-weight-bold mx-auto  p-4">please subscribe your email so you get best offer</h1>
     
     <p className="display-6 text-white font-weight-bold mx-auto  p-4">we have exculsive offer for you <br/> Let's Grow together</p>
     <br/>
     <div className="p-4 ">
     <input type="email" className="form-control mb-4 lead   font-weight-bold  p-4" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Email"/>
     <Button variant="primary" type="button" >
          submit
        </Button>
     </div>
     </div>
     <div class="col-md-6   ">
         <img src={Hello4} alt="image" className="img-fluid"/>
     </div>


 </div>
    
   </div>
        
        </div>
    );
}
export default newsletter;














