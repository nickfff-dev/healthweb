import React from 'react'
import { Container } from "react-bootstrap"
import headim from "./hf3.svg"




function Intro() {
  return (
    <div className="d-flex align-items-baseline justify-content-center">

      <Container>
        <h1>intro header</h1>
        <p>Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.</p>
      </Container>
      <Container>
      <img className="img-fluid" src={headim} alt="titleimage"  />
      </Container>

      
    </div>
  )
}


export default Intro
