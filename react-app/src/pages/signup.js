//import logo from './logo.svg';
//import './App.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";


function Signup() {
  const [data, setData] = useState([]);
 
  const [Name, setName] = useState("");
  
  const [tempdata, setTempdata] = useState([]);
  const navigate = useNavigate();
 

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
      
      
     
    };
    console.log(user);

    let res = fetch("http://localhost:5000/users", {
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
          
          localStorage.setItem("user", JSON.stringify(user))
          // alert("user created successfully");
          navigate("/home");
        } else {
          console.log("Some error occured");
        }
      })
      .then((info) => console.log(info));
  
   
    // res.then((ress)=> console.log("RESS :: ",ress.status));
  };

  return (
    <div className="container mt-5 w-25 border p-5">
      <Form>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value) }
          required/>
        </Form.Group>
       
        


        <br></br>
        <Button variant="primary" type="submit" onClick={handlesubmit}>
          Create User
        </Button>
        <br></br>
      <h3> Login if you have User</h3>

      <Link to="/home">Login</Link>
      <br></br>
      </Form>
    </div>
  );
}

export default Signup;
