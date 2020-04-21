import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navibar">
      <a className="navbar-brand ml-5" href="#">
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
          <i className="fas fa-bars" style={{ color: '#fff' }} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-dark text-uppercase ml-5" to="/">
              Home&nbsp;
              <i className="fas fa-home" />
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-dark text-uppercase ml-5"
              to="/news"
            >
              reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-dark text-uppercase ml-5"
              to="/contacts"
            >
              contact us
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">

        <input type="text" id="inpt" placeholder="Search.." name="search"/>&nbsp;
  <button type="submit" id="searching" class="btn btn-info"><i class="fa fa-search"></i></button>&nbsp;
  <button type="button" class="btn btn-success"> SIGNUP </button>&nbsp;      
   <button type="button" class="btn btn-success"> SIGNIN </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
