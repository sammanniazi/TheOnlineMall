import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";

//import Button from "react-bootstrap/Button";
import { json } from "react-router-dom";
//import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



function Kidb(props) {




    // var myMap = new Map();

    const [data, getData] = useState([]);


    // function savecartdata(data) {
    //   var a = [];
    //   localStorage.setItem("user", JSON.stringify(data));

    //   a.push(data);
    //   console.log(a);
    //   localStorage.getItem("user", JSON.stringify(a));
    // }

    const URL = "http://localhost:5000/bestSeller";
    useEffect(() => {
        fetchData();
    }, []);
    // {
    //   console.log(data.currentUser);
    // }

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
            <div className="container-fluid mt-5">
                <div className="row text-center">

                    <div className="row text-center">
                        {data.map((products, item) => (
                            <div key={item} className="col-10 col-md-4 mt-5">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#e0f7fa" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="390"
                                            image={products.image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {products.title.substring(0, 12)}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {products.description}
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                ${products.price}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{ justifyContent: "center" }}>
                                        <Button variant="contained" color="secondary" onClick={() => {
                                            props.AddToCart(products)
                                        }}>Add To Cart</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        ))}
                    </div>



                </div>
            </div>
        </>
    );
}

export default kidb;
