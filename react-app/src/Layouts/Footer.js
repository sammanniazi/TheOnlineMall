import React from "react"
//import Button from "react-bootstrap/Button";
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Thank You For Visiting Us</h5>
                <p>please subscribe to our newsletter.</p>
                <input type="email" className="  ont-weight-bold p-1 " id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Email"/>
                <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            

            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">facebook</a></li>
                    <li><a href="#!">instagaram</a></li>
                    <li><a href="#!">twitter</a></li>
                
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> TheOnlineMall</a>
    </div>

</footer>

export default Footer