import React from 'react'
import {  Container, Row, Navbar, Nav, NavItem, NavLink, NavDropdown} from "react-bootstrap"
import { Search } from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'



function Header() { 
  // create a multi nested navitems


  return (
    
    <Navbar bg="info" expand="lg">
    <Container>
      <Navbar.Brand className="brand" href="#home">HealthWeb</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse className=" justify-content-center" id="navbarScroll">
          <Nav style={{fontWeight: "bold", fontSize: "20px", color:"#1F3F68" }}>
            <NavLink> HOME</NavLink>
            <NavLink> ABOUT</NavLink>
            <NavLink> EXPLORE</NavLink>
            <NavLink > <Link to="/blog">Blog</Link> </NavLink>
            
            <NavLink> SUBSCRIBE</NavLink>
            <NavLink><Search/></NavLink>
       </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
    
      
      
      
  )
  
}


export default Header
