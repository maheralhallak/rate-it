import React, { Component } from 'react'
import { Navbar, Nav ,Dropdown,DropdownButton} from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './navbar.css'


export class NavBar extends Component {
  
  render() {
    
    
    return (
      <>
      
      <div >
        <Navbar bg="light" variant="primary" className="navi  sticky-top">

          <Nav className="mr-auto sticky-top">

            <Nav.Link className="link text-weight-bold" href="/welcome"> Home</Nav.Link>
            <Nav.Link className="link" href="/brands">Brands</Nav.Link>
            
            
            <Nav.Link className="link" href="/items">Items</Nav.Link>

          
    {[DropdownButton].map((DropdownType, idx) => (
     
        <DropdownType
          key={idx}
          drop="left"
          id={`dropdown-button-drop-${idx}`}
          size="sm"
          variant="outline-dark"
          title={
            <span>
              <PersonIcon />{" "}
            </span>
           }
          
        >
          
          <Dropdown.Item eventKey="1" href="/signin">
            <Nav.Link className="d-link" href="/signin"> Signin</Nav.Link>
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item eventKey="2" href="/register">
            <Nav.Link className="d-link" href="/register">Register</Nav.Link>
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item eventKey="3" href="#">
            <Nav.Link className="d-link" href="/register"> <ExitToAppIcon/> Logout</Nav.Link>
            </Dropdown.Item>
            
        </DropdownType>
      
        
         ))}
        </Navbar>
      </div>
      </>
    )
  }
}

export default NavBar
