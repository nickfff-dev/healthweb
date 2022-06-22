import React from 'react';
import { Container, Col, Row } from "react-bootstrap"
import Header from './Header'
import Intro from './Intro'
import Explore from './Explore';
import BlogPage2 from './BlogPage2';


function Home () {
  return (
    <Col>
    
      <Intro />
      <Explore />
      <BlogPage2 />

  
    </Col>
  )
}





export default Home;
