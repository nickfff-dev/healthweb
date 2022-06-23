import React from "react"
import { Container, Button, Col, Row } from "react-bootstrap"
import React from "react";
import { Nav, NavItem, NavLink, Offcanvas,Navbar, OffcanvasBody, OffcanvasHeader, Button } from "react-bootstrap";
import{ArrowRightCircle,AwardFill, HospitalFill, HeartPulseFill, JournalMedical, BasketFill, List} from 'react-bootstrap-icons';



function Blog() {
  return (
    <Offcanvas placement="start" show={true} scroll={true} backdrop={false}>
        <Offcanvas.Header >
          <Offcanvas.Title><div className="d-flex align-items-baseline"><h3 className="px-2">Categories</h3><ArrowRightCircle /></div> </Offcanvas.Title>
          
        </Offcanvas.Header>
        
        <Offcanvas.Body>
        <hr/>
        <Nav className="col-md-12 d-none d-md-block sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            ><Nav.Item>
            <Nav.Link href="/home"><div className="d-flex align-items-start justify-content-start"><JournalMedical/><span className="px-2">All Articles</span></div> </Nav.Link>
        </Nav.Item>
            <hr/>
            <Nav.Item>
                <Nav.Link href="/home"> <div className="d-flex align-items-start justify-content-start"><BasketFill/>  <span className="px-2">Nutrition </span></div> </Nav.Link>
            </Nav.Item>
            <hr/>
            <Nav.Item>
                <Nav.Link eventKey="link-1"><div className="d-flex align-items-start justify-content-start"><HospitalFill/> <span className="px-2">Mental Health</span></div></Nav.Link>
            </Nav.Item>
            <hr/>
            <Nav.Item>
                <Nav.Link eventKey="link-2"><div className="d-flex align-items-start justify-content-start"><HeartPulseFill/><span className="px-2">WellNess</span></div></Nav.Link>
            </Nav.Item>
            <hr/>
            <Nav.Item>
                <Nav.Link eventKey="link-3"><div className="d-flex flex-row align-items-start justify-content-start"><AwardFill/>
                <span className="px-2">Product Reviews</span></div>
                </Nav.Link>
            </Nav.Item>
            <hr/>
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>
  )
}

export default Blog;
