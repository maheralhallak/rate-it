import React, { Component } from 'react'
import { Button, Navbar, Nav  } from 'react-bootstrap';
import './navbar.css'
import { green } from '@material-ui/core/colors';
export class NavBar extends Component {
  render() {
    return (
      <div >
        <Navbar bg="light" variant="primary" className="navi">
         
          <Nav className="mr-auto">
            <Nav.Link className="link text-weight-bold" href="/homepage"> Home</Nav.Link>
            <Nav.Link className="link" href="/brands">Features</Nav.Link>
            <Nav.Link className="link" href="/signin">Signin</Nav.Link>
            <Nav.Link className="link" href="/register">Register</Nav.Link>
            <Nav.Link className="link" href="/pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
