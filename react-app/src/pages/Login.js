//import logo from './logo.svg';
// import './App.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");


  async function validation() {
    let userFound = false;
    await fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((json) => {
        // localStorage.setItem("user", JSON.stringify(user))
        
        json.map((element) => {
          if (element.Name == name ) {
            localStorage.setItem("user", JSON.stringify(element))
            userFound=true;
          }
        });
      });

      if(userFound === true){
        navigate("/");
      }else{

        alert("please create user")
        navigate("/signup");
      }
  }
  // const user ={
  //   Email : email,
  //   Password: password
  // }


  return (<>

  {/* <h2 clas> Login Page</h2> */}


<Header/>
<br></br>

    <div className="container mt-5 w-25 border p-5 bg-info">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Email"
            value={name}
            onChange={(e) => {setName(e.target.value)
              }}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Password"
            value={name}
            onChange={(e) => {setName(e.target.value)
              }}
          />

          
        </Form.Group>

        

        <Button variant="primary" type="button" onClick={validation}>
          Login
        </Button>
      </Form>
      <br></br>
      <h6> Create User if you dont have any account</h6>

      <Link to="/signup">Create User</Link>
      <br></br>
    </div>

    <br/>
    <hr/>
    <Footer/>
  </>
  );
}

export default Login;