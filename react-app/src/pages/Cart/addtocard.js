import { useEffect, useState } from "react";

import Badge from 'react-bootstrap/Badge';
import Table from "react-bootstrap/Table";

import Button from "../../Components/Button";

import Header from '../../Layouts/Header';

import Footer from '../../Layouts/Footer';
import { useNavigate } from "react-router-dom";






  


      

const ShopingCart = () => {

    
  

    const navigate = useNavigate();

  const [data, setData] = useState();
  const [total, setTotal] = useState(0);


  useEffect(() => {
    
    let CartData = localStorage.getItem("user");
   
    setData(CartData);
  }, []);
  {console.log(data)}



  


  const AddToCart = (index) => {
    const state = data;
    state[index].quantity = state[index].quantity + 1;
    return setData([...state]);
  };
  const RemoveFromCart = (index) => {
    
    const state = data;
    state[index].quantity = state[index].quantity  -  1;
    return setData([...state]);
  };
  const Remove = (index) => {
    const state = data.filter((v, k) => k !== index);
    return setData([...state]);
  };

  function checkout(){

    navigate("/signup");
  }


  useEffect(() => {
    const sum = data.reduce((sum, data) => {
      return Math.round(sum + data.quantity * data.price);
    }, 0);
    setTotal(sum);
  }, [data]);

  return (
    <>

      <Header/>

      <br/>
      <br/>
     

      <div className="container mt-5 w-35 border p-5 shadow bg-light rounded">
      
      
    <Table>

      <thead>

      <tr>

        <th>product</th>
        <th>product Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      </thead>
      
      <tbody>
      {data.map((i, id) => (
        <tr key={id}>
          <td><img src={i.image}  alt="pics" style={{ width: '4rem' }} /> </td>
          <td><h3>{i.title}
          
        </h3>

      
               
               <p><Badge bg="success" >inStock</Badge></p>
          </td>

          <td>

          <Button
                  className="rounded bg-gray-500 w-14 h-14"
                  name="+"
                  onClick={(e) => AddToCart(id)}
                />
                <p className=" text-xl">{i.quantity > 0 ? i.quantity : 0}</p>
        
          <br/>

          <Button
                  className="rounded bg-gray-500 w-14 h-14"
                  name="-"
                  onClick={(e) => RemoveFromCart(id)}
                />
      
          

          </td>
          <td>{i.price}

          <br/>
          <Button
                  className="bg-success   "
                  name="Save for later"
                />
                <br/>
                <br/>

                
                <Button
                  className="bg-danger  border-b-2 border-red-600 w-14  "
                  name="Remove"
                  onClick={(e) => Remove(id)}
                />
          
          </td>
        
        </tr>
       
      
      ))}
      </tbody>
    </Table>
  
        <div className="flex gap-8">
        <div>
          <p className="font-bold text-xl">Sub-Total</p>
          <p className="text-gray-400"> 2 item</p>
        </div>
        <p className="font-bold text-2xl">{total > 0 ? total : 0}$</p>
      </div>

      <div className=" align-items-center justify-content-center ">
      <Button
                  className="bg-success  border-b-2 border-red-600 w-14  "
                  name="CheckOut"
                  onClick={checkout}
                />
      </div>
  </div>


  <br/>
  <hr/>

  <Footer/>

  </>
    
          );
};
export default ShopingCart;
