import React from 'react'
import { Navbar, Nav ,Dropdown,DropdownButton} from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './navbar.css'


export default function NaviBar(props) {
  
 
    const logOut = () => {
      localStorage.clear('token');
      window.location.href= '/signin';
  }
    
    
    return (
      <>
      
      <div >
        <Navbar bg="light" variant="primary" className="navi  sticky-top">

          <Nav className="mr-auto sticky-top">

            <Nav.Link className="link text-weight-bold" href="/welcome"> Home <h6>&#9733;</h6> </Nav.Link>
            <Nav.Link className="link" href="/brands">Brands <h6>&#9733;</h6></Nav.Link>
            
            <Nav.Link className="link" href="/items">Items<h6>&#9733;</h6></Nav.Link>
            <Nav.Link className="link" href="/rate-it/shop">Shop<h6>&#9733;</h6></Nav.Link>
            
          </Nav>
          
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
            <Nav.Link className="d-link" onClick={logOut} > <ExitToAppIcon/> Logout</Nav.Link>
            </Dropdown.Item>
            
        </DropdownType>
      
        
         ))}
        </Navbar>
      </div>
      </>
    )
  }


