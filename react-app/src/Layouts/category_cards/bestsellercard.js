import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';





function Homecard() {

  const [data, getData] = useState([]);


  const URL = "http://localhost:5000/bestSeller";
  useEffect(() => {
    fetchData();
    
  }, []);
  {console.log(data.currentUser)}

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        getData(response);
      });
    console.log(data);
  };

  
  
  return (
    <>
    <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active"></div>
     <div className="container-fluid mt-5">
                <div className="row text-center">
       
        {data.map((products) => (
               
               <div className="col-10 col-md-4 mt-5" >
                 <div className="card  "   >
                 <div className="d-flex align-items-center">
                  <img className="card-img-top" src={products.image} alt="Card image cap" class="rounded" width="250"/>
                  <div className="card-body">
                    <h5 className="card-title">{products.title.substring(0,12)}</h5>
                    <p className="card-text">${products.price}</p>
                    <a href="#" className="btn btn-outline-dark">Buy Now</a>
                  </div>
                  
                </div>
                </div>
                </div>



            
  
        ))}


</div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Homecard;
