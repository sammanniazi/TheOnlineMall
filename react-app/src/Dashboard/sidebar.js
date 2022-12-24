import React from "react";
import { Link ,Navigate, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function App() {

    const navigate = useNavigate();


    function logout() {
        localStorage.removeItem("user");
    
        navigate("/");
      }
    return (
        <>

            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Women</span> </a>
                                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link to="/addwomendress" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Dress</span>  </Link>
                                        </li>
                                        <li>
                                            <Link to="/addwomenshoes"  className="nav-link px-0"> <span className="d-none d-sm-inline">Add Shoes</span>  </Link>
                                        </li>
                                        <li>
                                            <Link to="/addwomenbags"  className="nav-link px-0"> <span className="d-none d-sm-inline">Add Bags</span>  </Link>
                                        </li>
                                        <li>
                                            <Link to="/addwomenjewlery"  className="nav-link px-0"> <span className="d-none d-sm-inline">Add Jewlery</span>  </Link>
                                        </li>
                                    </ul>

                                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Men</span> </a>
                                    <ul className="collapse show nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link to="/addmendress" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Dress</span>  </Link>
                                        </li>
                                        <li>
                                            <Link to="/addmenshoes"  className="nav-link px-0"> <span className="d-none d-sm-inline">Add Shoes</span>  </Link>
                                        </li>
                                        <li>
                                            <Link to="/addmenbags"  className="nav-link px-0"> <span className="d-none d-sm-inline">Add Bags</span>  </Link>
                                        </li>
                                        
                                    </ul>

                                    <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Kids</span> </a>
                                    <ul className="collapse show nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link to="/addkidsdress" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Dress</span>  </Link>
                                        </li>
                                        <li>
                                            <Link to="/addkidsshoes"  className="nav-link px-0"> <span className="d-none d-sm-inline">Add Shoes</span>  </Link>
                                        </li>
                                        <li>
                                            <Link to="/addkidsbags"  className="nav-link px-0"> <span className="d-none d-sm-inline">Add Bags</span>  </Link>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/orders" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></Link>
                                </li>
                                
                                
                                <li style={{ marginLeft: "1rem" }} className="nav-item ">
                  <Button variant="primary" className="ms-2" onClick={logout}>
                    Logout
                  </Button>
                </li>
                            </ul>
                            <hr />


                            
                    </div>
                </div>
               
            </div>
        </div>

    </>
  );
}

export default App;
