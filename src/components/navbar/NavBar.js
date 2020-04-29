import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navibar">
      <a className="navbar-brand ml-3" href="http://www.google.com" target="_blank">
        <img src={logo} alt="logo" style={{ width: '50px' }} />
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
        <span>
          <i className="fa fa-bars" style={{ color: '#fff' }} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active my-0">
            <Link className="nav-link text-dark text-uppercase ml-3" to="/">
              Home&nbsp;
              <i className="fa fa-home" />
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item my-0">
            <Link
              className="nav-link text-dark text-uppercase ml-3"
              to="/news"
            >
              reviews
            </Link>
          </li>
          <li className="nav-item my-0">
            <Link
              className="nav-link text-dark text-uppercase ml-3"
              to="/contacts"
            >
              contact us
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">

        <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>&nbsp; 
  
        <button type="button" class="btn btn-outline-success my-2 mr-sm-2"> SIGNUP </button>&nbsp;      
        <button type="button" class="btn btn-outline-success my-2 mr-sm-2"> SIGNIN </button>
        </form>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
