//import logo from './logo.svg';
//import './App.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import SimpleReactValidator from 'simple-react-validator';


function Signup() {
  const [data, setData] = useState([]);
 
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  
  const [tempdata, setTempdata] = useState([]);
  const navigate = useNavigate();


  const validator=new SimpleReactValidator();
 

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
    if (Name==="" ||Email==="" || Password==="") alert("Fields cannot be empty")
    if ( Name.length>0 ) if(Name[0].toUpperCase()!==Name[0]) alert("First letter must be capital")
    if(Password.length<4 || Password.length>10) alert("password must be between 4 to 10 digits")


  else{const user = {
      
      Name: Name,
      Email:Email,
      Password: Password
      
      
     
    };
    console.log(user);

    fetch("http://localhost:5000/users", {
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
          setPassword("");
          
          localStorage.setItem("user", JSON.stringify(user))
           alert("user created successfully");
          navigate("/");
        } else {
          console.log("Some error occured");
        }
      })
      .then((info) => console.log(info));}
  
   
    // res.then((ress)=> console.log("RESS :: ",ress.status));
  };

  return (
    <>

    <Header/>
<br/>
    <div className="container mt-5 w-25 border p-5 shadow bg-white rounded">
      <Form type="submit" onSubmit={handlesubmit}>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control className="bg-light"
            type="text"
            placeholder="Name"
            value={Name}
            required="required"
            onChange={(e) => setName(e.target.value) }

            minLength={3} maxlength={20}

          
          />

<Form.Label>Email</Form.Label>
          <Form.Control className="bg-light"
            type="Email"
            placeholder="Email"
            value={Email}
            required="required"
            onChange={(e) => setEmail(e.target.value) }
          />

<Form.Label>Password</Form.Label>
          <Form.Control className="bg-light"
            type="text"
            placeholder="Password"
            value={Password}
            required="required"
            onChange={(e) => setPassword(e.target.value) }
          />

        </Form.Group>
       
        


        <br></br>
        <Button variant="primary" type="submit" onSubmit={handlesubmit}>

          Create User
        </Button>
        <br></br>
      <h3> Login if you have User</h3>

      <Link to="/login">Login</Link>
      <br></br>
      </Form>
    </div>

    <hr/>
    <Footer/>
    </>
  );
}

export default Signup;
