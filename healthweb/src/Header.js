import React from 'react'
import { Container, Row, Col, Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap"
import {Search} from 'react-bootstrap-icons'


function Header() { 
  // create a multi nested navitems

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="pe-5">HealthWeb</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
          
           <NavDropdown title="Health Condition" id="basic-nav-dropdown2" className="pe-5">
              
                <NavDropdown title="Sub-Action1"  drop="end">
                  <NavDropdown.Item eventKey="4.1">Another action
                  </NavDropdown.Item>
              </NavDropdown>
                 
              <NavDropdown title="Sub-Action2" drop="end">
                  <NavDropdown.Item eventKey="4.2">Another action
                  </NavDropdown.Item>
              </NavDropdown>
             
            </NavDropdown>
       

        
            <NavDropdown title="Discover" id="basic-nav-dropdown2" className="pe-5">
              
                <NavDropdown title="Sub-Action1" drop="end">
                  <NavDropdown.Item eventKey="4.3">Another action
                  </NavDropdown.Item>
              </NavDropdown>
                 
              <NavDropdown title="Sub-Action2" drop="end">
                  <NavDropdown.Item eventKey="4.4">Another action
                  </NavDropdown.Item>
              </NavDropdown>
             
            </NavDropdown>
          
           <NavDropdown title="Plan" id="basic-nav-dropdown2" className="pe-5">
              
                <NavDropdown title="Sub-Action1" drop="end">
                  <NavDropdown.Item eventKey="4.5">Another action
                  </NavDropdown.Item>
              </NavDropdown>
                 
              <NavDropdown title="Sub-Action2" drop="end">
                  <NavDropdown.Item eventKey="4.6">Another action
                  </NavDropdown.Item>
              </NavDropdown>
             
            </NavDropdown>
        
           <NavDropdown title="Connect" id="basic-nav-dropdown2" className="pe-5">
              
                <NavDropdown title="Sub-Action1" drop="end">
                  <NavDropdown.Item eventKey="4.7">Another action
                  </NavDropdown.Item>
              </NavDropdown>
                 
              <NavDropdown title="Sub-Action2" drop="end">
                  <NavDropdown.Item eventKey="4.8">Another action
                  </NavDropdown.Item>
              </NavDropdown>
             
            </NavDropdown>
      
           <NavDropdown title="Shop" id="basic-nav-dropdown2" className="pe-5">
              
                <NavDropdown title="Sub-Action1" drop="end">
                  <NavDropdown.Item eventKey="4.9">Another action
                  </NavDropdown.Item>
              </NavDropdown>
                 
              <NavDropdown title="Sub-Action2" drop="end">
                  <NavDropdown.Item eventKey="5.0">Another action
                  </NavDropdown.Item>
              </NavDropdown>
             
            </NavDropdown>
         
        </Nav>

        <Nav>
          <NavItem>
            <Nav.Link className="pe-4" href="#details"><Search/></Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link className="pe-4" href="#link">Subscribe</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
  
}


export default Header
