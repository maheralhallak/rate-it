import React, { Component } from 'react'
import { Button, Navbar, Nav } from 'react-bootstrap';
import './navbar.css'
import { green } from '@material-ui/core/colors';
export class NavBar extends Component {
  render() {
    return (
      <div >
        <Navbar bg="light" variant="primary" className="navi  sticky-top">

          <Nav className="mr-auto sticky-top">
            <Nav.Link className="link text-weight-bold" href="/"> Home</Nav.Link>
            <Nav.Link className="link" href="/brands">Brands</Nav.Link>
            <Nav.Link className="link" href="/signin">Signin</Nav.Link>
            <Nav.Link className="link" href="/register">Register</Nav.Link>
            <Nav.Link className="link" href="/items">Items</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
