//import logo from './logo.svg';
//import './App.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useNavigate, Link, json } from "react-router-dom";
import Sidebar from '../sidebar';



function AddWomenShoes() {
    const [data, setData] = useState([]);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setcategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    //const [cartdata, setcartdata] = useState([]);
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

            title: title,
            price: price,
            quantity: quantity,
            category: category,
            description: description,
            image: image










        };
        console.log(user);

        let res = fetch("http://localhost:5000/womenShoes", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => {
                console.log("RES :: ", res.status);
                if (res.status === 201) {

                    setTitle("");
                    setPrice("");
                    setQuantity("");
                    setcategory("");
                    setDescription("");
                    setImage("");

                    // alert("user created successfully");
                    navigate("/admin");

                } else {
                    console.log("Some error occured");
                }
            })
            .then((info) => console.log(info));


        // res.then((ress)=> console.log("RESS :: ",ress.status));
    };

    return (
        <>
            <div className="  row ">
            

                <div className="col-md-8  mt-0">
                    
                
                <Sidebar/>
                <h1></h1>
                </div>
                <div className="col-md-4 mt-0">
                
                <div className="container mt-0  w-35 border p-3 shadow bg-white rounded">

            

                <Form>
                  <h1 className="text-center">Add Shoes details</h1>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Title</Form.Label>
                        <Form.Control className="bg-light"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required />

                        <Form.Label>Price</Form.Label>
                        <Form.Control className="bg-light"
                            type="text"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required />

                        <Form.Label>Quantity</Form.Label>
                        <Form.Control className="bg-light"
                            type="text"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required />

                        <Form.Label>Category</Form.Label>
                        <Form.Control className="bg-light"
                            type="text"
                            placeholder="category"
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
                            required />

                        <Form.Label>Product Descripition</Form.Label>
                        <Form.Control className="bg-light"
                            type="text"
                            placeholder="descripion"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required />
                        <Form.Label>image</Form.Label>
                        <Form.Control className="bg-light"
                            type="text"
                            placeholder="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required />



                    </Form.Group>






                    <br></br>
                    <Button variant="primary" type="submit" onClick={handlesubmit}>
                        Add Product
                    </Button>
                    <br></br>


                    <br></br>
                </Form>
            </div>
        
            <hr />





                </div>
                
            </div>

            
            
                    </>
    );
}

export default AddWomenShoes;
