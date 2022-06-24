import React from "react"
import {Container, Row,Col, Button,Stack, Collapse} from "react-bootstrap"



function Footer() {
  return (
 
      <div className="footer mt-5">
        <Stack gap={2}>
        <Container >
      <div className="d-flex text-left  align-items-center justify-content-between mt-5 pr-5">
            <Col>
            <h2 className="text-left  mb-5 text-bold">Interested to Work <br/> With Our Team?</h2>
            <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </Col>
            <Col></Col>
          <Col>
            <Button size="lg" className="subscribe">
              Subscribe
            </Button>
        </Col>
      </div>
        </Container>
        <hr className="w-75"/>
          <Container>
      <div className="d-flex flex-row align-items-start justify-content-center">
       
        
         
        <Col>
        <h3 className="text-left">Blog</h3>
          <p className="text-left">Nutrition</p>
          <p className="text-left">Mental-Health</p>
              <p className="text-left">Well-Being</p>
              <p className="text-left">Product Reviews</p>
           

            </Col>
            <Col>
        
          <h3 className="text-left">About</h3>
          <p className="text-left">Address</p>
          <p className="text-left">Phone</p>
            <p className="text-left">Email</p>
           
          </Col>
        <Col>
        <h3 className="text-left">Follow Us</h3>
          <p className="text-left">Twitter</p>
          <p className="text-left">Facebook</p>
            <p className="text-left">Reddit</p>
           

        </Col>
      
      </div>
        </Container>
       <Container> <span className="text-muted text-white">2022 Healthweb &copy; Allrights reserved</span></Container>
      </Stack>

      </div>

      
   

   
  )
}



export default Footer
