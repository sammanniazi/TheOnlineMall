//import logo from './logo.svg';
//import './App.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState,useEffect } from "react";
import { useNavigate,Link, json } from "react-router-dom";
import Header from '../../Layouts/Header';
import Footer from '../../Layouts/Footer';


function BillForm() {
  const [data, setData] = useState([]);
 
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Address, setAddress] = useState("");
  
  //const [cartdata, setcartdata] = useState([]);
  const navigate = useNavigate();

   
     let CartData =JSON.parse(localStorage.getItem("products")) ;
     
     console.log( CartData)

    

    console.log(CartData[0].id)
  
  



 

  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));

  //   localStorage.setItem("userdata", JSON.stringify(data));
  //   //setTempdata(JSON.parse(localStorage.getItem("userdata")))
  //   setTempdata(localStorage.getItem("userdata"));

  //   console.log("Local Storage Data" + tempdata);
  // }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const user = {
      
      Name: Name,
      Email:Email,
      Contact: Contact,
      products:CartData
     
      

      



      
      
     
    };
    console.log(user);

    let res = fetch("http://localhost:5000/shipping", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        console.log("RES :: ", res.status);
        if (res.status === 201) {
          
          setName("");
          setEmail("");
          setContact("");
          setAddress("");
          
          // alert("user created successfully");
          navigate("/");
       
        } else {
          console.log("Some error occured");
        }
      })
      .then((info) => console.log(info));
  
   
    // res.then((ress)=> console.log("RESS :: ",ress.status));
  };

  return (
    <>

    <Header/>
<br/>
<div
        id="example-div"
        class="  d-flex aligns-items-center justify-content-center"
        style={{ maxHeight: "100px" }}
      >
        <h1>Shippment Detail</h1>
      </div>
    <div className="container mt-5 w-25 border p-5 shadow bg-white rounded">
       
      <Form>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control className="bg-light"
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value) }
          required/>

<Form.Label>Email</Form.Label>
          <Form.Control className="bg-light"
            type="text"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value) }
          required/>

<Form.Label>Contact</Form.Label>
          <Form.Control className="bg-light"
            type="text"
            placeholder="Contact"
            value={Contact}
            onChange={(e) => setContact(e.target.value) }
          required/>

<Form.Label>Shipping Address</Form.Label>
          <Form.Control className="bg-light"
            type="text"
            placeholder="Shipping address"
            value={Address}
            onChange={(e) => setAddress(e.target.value) }
          required/>

        </Form.Group>

        
       
        


        <br></br>
        <Button variant="primary" type="submit" onClick={handlesubmit}>
          conform order
        </Button>
        <br></br>
      
      
      <br></br>
      </Form>
    </div>

    <hr/>
    <Footer/>
    </>
  );
}

export default BillForm;
