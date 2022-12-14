import React from "react";

import { Link } from "react-router-dom";

import localDataHandler from "../localData/local";
const Navbar = (props) => {
  return (
    <div>
      <div
        id="example-div"
        class="bg-info border d-flex aligns-items-center justify-content-center"
        style={{ maxHeight: "100px" }}
      >
        <p>shipping is free above 100 dollar order</p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            TheOnlineMall
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Men
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/bagsm" className="dropdown-item">
                      Bags
                    </Link>
                  </li>
                  <li>
                    <Link to="/clothm" className="dropdown-item">
                      Clothing
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link to="/shoesm" className="dropdown-item">
                      Shoes
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Women
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/bagsw" className="dropdown-item">
                      Bags
                    </Link>
                  </li>
                  <li>
                    <Link to="/clothw" className="dropdown-item">
                      Clothing
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="jewleryw" className="dropdown-item">
                      Jewlery
                    </Link>
                  </li>
                  <li>
                    <Link to="/shoesw" className="dropdown-item">
                      Shoes
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kids
                </a>
                <ul className="dropdown-menu">
                <li>
                    <Link to="/kidscloth" className="dropdown-item">
                      Clothing
                    </Link>
                  </li>
                  <li>
                    <Link to="/kidsshoes" className="dropdown-item">
                      Shoes
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/kidsbag" className="dropdown-item">
                      Bags
                    </Link>
                  </li>
                </ul>
              </li>
              
            </ul>
            <ul class="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  to="/addtocart"
                  className="nav-link mx-2 text-uppercase"
                  href="#"
                >
                  <i className="fa-solid fa-cart-shopping me-1"></i> Cart {localDataHandler.cart.length}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link mx-2 text-uppercase">
                  <i className="fa-solid fa-circle-user me-1"></i> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
