//import logo from './logo.svg';

import Table from "react-bootstrap/Table";
import Sidebar from "./sidebar";

//import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

import { useEffect, useState } from "react";

function Orders() {
  const [data, getData] = useState([]);


  const URL = "http://localhost:5000/shipping";


  useEffect(() => {
    fetchData()
  }, []);


  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        getData(response);
      });
  };

  return (
    <>

      <div className="  row ">

        
        <div className="col-md-12 mt-0">




          <div className="container mt-5 w-200 border p-5 shadow bg-light rounded">
            <Table>
              <thead>
                <tr>

                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>image</th>
                  <th>pName</th>
                  <th>pCategory</th>
                  <th>Quantity</th>
                
                 


                </tr>
              </thead>

             
                {data.map((i, id) => (
                   <tbody>
                  <tr key={id}>

                    <td>
                      {i.Name}


                    </td>
                    <td>
                      {i.Email}


                    </td>
                    <td>
                      {i.Contact}


                    </td>
                    <td>
                      {i.Address}


                         </td>


                         {i.products.map((product, id) => (
                             <tr key={id}>

                            <td>
                      <img src={product.image} alt="pics" style={{ width: "4rem" }} />{" "}
                         </td>
                          <td>
                         {product.title}


                    </td>
                    <td>
                      {product.category}


                    </td>

                    
                    <td>
                      {product.price}


                    </td>
                    


             
            </tr>
          ))}

                     

                    

                  </tr>
                  </tbody>
                ))}

         

            </Table>




          </div>
        </div>
      </div>

    </>
  );
}

export default Orders;