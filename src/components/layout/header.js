import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";


import Search from "./Search";


import ImageBack from "./ImageBack";

import "../../App.css";

const Header = ({history}) => {

  
  const keyword = useParams()
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar navbar-brand">
            <a href="/home">
              {" "}
              <img src="/images/logo.png" alt="" />{" "}
            </a>
          </div>
        </div>

        <div className="col-12 col-md-4 mt-2 mt-md-0">
         <Link to={`/search/${keyword}`} >
         <Search history={ history } /> 
         </Link> 
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to='/login' className="btn ml-4" id="login_btn">
            Login
          </Link>

          <span id="cart" className="ml-3">
            Cart
          </span>
          <span className="ml-1" id="cart_count">
            2
          </span>
          
       
        </div>       
      </nav>
    </Fragment>
  );
};
export default Header;













{/* <Fragment> */}
      {/* <nav classNameName="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <img src="/images/logo.png" alt="" />
          </div>
        </div>
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div className="input-group">
            <input 
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Enter Product Name ..."/>
            <div className="input-group-append">
              <button id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <button className="btn" id="login_btn">
            Login
          </button>

          <span id="cart" className="ml-3">
            Cart
          </span>
          <span className="ml-1" id="cart_count">
            2
          </span>
        </div>
      </nav> */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark">
        <a href="/home">
          {" "}
          <img src="/images/logo.png" alt="" />{" "}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul id="nav--link" className="navbar-nav mr-auto">
            <li id="nav---link" className="nav-item ">
              <a id="color" className="nav-link  " href="#">
                {" "}
                Home{" "}
              </a>
            </li>

            <li id="nav---link" className="nav-item">
              <a id="color" className="nav-link  " href="#">
                {" "}
                Link
              </a>
            </li>

            <li id="nav---link" className="nav-item">
              <a id="color" className="nav-link  " href="#">
                {" "}
                Register
              </a>
            </li>

            <li className="nav-item dropdown">
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  {" "}
                  Action{" "}
                </a>
                <a className="dropdown-item" href="#">
                  {" "}
                  Another action
                </a>
                <div className="dropdown-divider"></div>
              </div>
            </li>
          </ul>
         
        </div>
        
        <div id="search-form" className="col-6 col-md-4 form-inline">
            <Search
            history={history => setHistory(history)}
            /> 
        </div>

        <div id="cart-login" className=" form-inline">
          <button className="btn" id="login_btn">
            Login
          </button>
          <div className="cart-body">
            <span id="cart" className="ml-3">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </span>
            <span className="ml-1" id="cart_count">
              20
            </span>
          </div>
        </div>
      </nav>
      <section>
        <ImageBack>
          <div className="image-back" id="image-background"></div>
        </ImageBack>
      </section>
    </Fragment> */}