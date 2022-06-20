import React from 'react'
import {  Row, Navbar, Nav, NavItem, NavDropdown} from "react-bootstrap"
import {Search} from 'react-bootstrap-icons'


function Header() { 
  // create a multi nested navitems
  const handleSelect = (eventKey) => {

    document.getElementById("yote").style.width = "1367px";
    document.getElementById("yote").style.height = "auto";
    
  }
    

  return (
    <div className="barbg px-3">
    <Navbar   expand="lg" className="nav-bar">
      <Navbar.Brand href="#home"   className="pe-5">HealthWeb</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="me-auto  my-2 my-lg-0" onSelect={handleSelect} >
            <NavDropdown title="Health Condition" id="basic-nav-dropdown2" className="pe-5" >
              <NavDropdown.Item eventKey="4.2"  >
                <div className="d-flex align-items-top justify-content-start" id="yote">

                <ul> <span> Featured</span>
                  <li>Acid Reflux</li>
                  <li>ADHD</li>
                  <li>Allergies</li>
                  <li>Alzheimer's & Dementia</li>
                  <li>Bipolar Disorder</li>
                </ul>
                  <ul>
                    Articles
                  <li>Acid Reflux</li>
                  <li>ADHD</li>
                  <li>Allergies</li>
                  <li>Alzheimer's & Dementia</li>
                  <li>Bipolar Disorder</li>
                  </ul>
              </div>
                </NavDropdown.Item>
              
             

   
             

              {/* <NavDropdown  title="Articles" drop="end" >
                {/* <NavDropdown.Item eventKey="4.2"><ul>
                  <li>Acid Reflux</li>
                  <li>ADHD</li>
                  <li>Allergies</li>
                  <li>Alzheimer's & Dementia</li>
                  <li>Bipolar Disorder</li>
                  </ul>
                </NavDropdown.Item>


                <NavDropdown.Item eventKey="4.3">ADHD
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">Allergies
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.5">Alzheimer's & Dementia
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.6">Bipolar Disorder
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.7">Cancer
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.8">Crohn's Disease
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.9">Chronic Pain
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.10">Cold & Flu
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.11">COPD
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.12">Depression
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.13">Fibromyalgia
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.14">Heart Disease
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.15">High Cholesterol
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.16">HIV
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.17">Hypertension
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.18">IPF
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.19">Osteoarthritis
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.20">Psoriasis
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.21">Skin and Care
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.22">STDs
                </NavDropdown.Item>

              </NavDropdown> */} 
             
            </NavDropdown>
       

        
            <NavDropdown title="Discover" id="basic-nav-dropdown2"   className="pe-5">
              
                <NavDropdown title="Sub-Action1" drop="end">
                  <NavDropdown.Item eventKey="4.3">Another action
                  </NavDropdown.Item>
              </NavDropdown>
                 
              <NavDropdown title="Sub-Action2" drop="end">
                  <NavDropdown.Item eventKey="4.4">Another action
                  </NavDropdown.Item>
              </NavDropdown>
             
            </NavDropdown>
          
           <NavDropdown title="Plan" id="basic-nav-dropdown2"   className="pe-5">
              
                <NavDropdown title="Sub-Action1" drop="end">
                  <NavDropdown.Item eventKey="4.5">Another action
                  </NavDropdown.Item>
              </NavDropdown>
                 
              <NavDropdown title="Sub-Action2" drop="end">
                  <NavDropdown.Item eventKey="4.6">Another action
                  </NavDropdown.Item>
              </NavDropdown>
             
            </NavDropdown>
        
           <NavDropdown title="Connect" id="basic-nav-dropdown2"   className="pe-5">
              
                <NavDropdown title="Sub-Action1" drop="end">
                  <NavDropdown.Item eventKey="4.7">Another action
                  </NavDropdown.Item>
              </NavDropdown>
                 
              <NavDropdown title="Sub-Action2" drop="end">
                  <NavDropdown.Item eventKey="4.8">Another action
                  </NavDropdown.Item>
              </NavDropdown>
             
            </NavDropdown>
      
           <NavDropdown title="Shop" id="basic-nav-dropdown2" cla >
              
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
          <NavItem className="nav-item">
            <Nav.Link  href="#details"><Search/></Nav.Link>
          </NavItem>
          <NavItem className="nav-item">
            <Nav.Link  href="#link">Subscribe</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      </div>
      
  )
  
}


export default Header
