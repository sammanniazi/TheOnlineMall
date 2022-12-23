import React from "react";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Deals from '../../deals.jpeg'
import Newarr from '../../download.jpeg'
import { useNavigate } from "react-router-dom";



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function DealCategories() {
    const navigate = useNavigate();

    function handlesubmit() {

        navigate("/deals");

    }




  return (
    <>

    <div className="row">
  <div className="container mt-5 w-25 border p-5 shadow bg-info rounded">

<Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={Newarr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            New Arrivals
          </Typography>
          <Typography variant="body2" color="text.secondary">
            we have some exciting new arivals in our stock
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handlesubmit}>
          Explore
        </Button>
      </CardActions>
    </Card>
   
    
    </div>
    <div className="container mt-5 w-25 border p-5 shadow bg-info rounded">

<Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={Deals}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Todays Deals
          </Typography>
          <Typography variant="body2" color="text.secondary">
           items are on deal upto 50%.Visit and enjoy your shopping
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Button size="small" color="primary" onClick={handlesubmit}>
          Explore New Deals
        </Button>
      </CardActions>
    </Card>

   
    
    </div>
    </div>
    </>
  );
}

export default DealCategories;
