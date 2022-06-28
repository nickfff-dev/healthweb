import React from 'react'
import { Button, Col } from "react-bootstrap"
import headim from "./illustration.svg"




function Intro() {
  return (
    <Col>
    <div className="col-md-12 mb-5 d-flex align-items-center intro justify-content-center">

      <Col>
      <h1 className="mb-4 py-4 maintxt">Health & Science <br/> Matter to us</h1>
       
        <p className="paratxt mb-4">Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder <br/> during the build.
          Only files inside the `public` folder can be referenced from the HTML.</p>
        <Button className="btn readmore">
          Read More
        </Button>
      </Col>
      <Col>
      <img className="img-fluid mine" src={headim} width="887.25px" height="679.31px" alt="titleimage"  />
        </Col>
      
      
      </div>
        
    </Col>
     
      
  )
}


export default Intro
