import React from 'react'
import { Container, Button, Col, Row } from "react-bootstrap"
import headim from "./illustration.svg"




function Intro() {
  return (

    <div className="d-flex align-items-center intro justify-content-center">

      <Container>
      <h1 className="mb-4 py-4 maintxt">Health & Science <br/> Matter to us</h1>
       
        <p className="paratxt mb-4">Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder <br/> during the build.
          Only files inside the `public` folder can be referenced from the HTML.</p>
        <Button className="btn readmore">
          Read More
        </Button>
      </Container>
      <Container>
      <img className="img-fluid mine" src={headim} width="887.25px" height="679.31px" alt="titleimage"  />
        </Container>
      
      
      </div>
        
     
      
  )
}


export default Intro
