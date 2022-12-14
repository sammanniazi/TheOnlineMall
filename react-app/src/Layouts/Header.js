import React from "react";
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
        <div id="example-div" class="bg-info border d-flex aligns-items-center justify-content-center"    style={{ maxHeight: '100px'}}>
      <p>shipping is free above 100 dollar order</p>
 </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="#">TheOnlineMall</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Men
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Women
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/bagsw" className="dropdown-item" >Bags</Link></li>
                                    <li><Link to="/clothw" className="dropdown-item" >Clothing</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to="jewleryw" className="dropdown-item" href="#">Jewlery</Link></li>
                                    <li><Link to="/shoesw" className="dropdown-item" href="#">Shoes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Kids
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home Decor
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto ">
        <li className="nav-item">
          <a className="nav-link mx-2 text-uppercase" href="#"><i className="fa-solid fa-cart-shopping me-1"></i> Cart</a>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link mx-2 text-uppercase"><i className="fa-solid fa-circle-user me-1"></i> Login</Link>
        </li>
      </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;