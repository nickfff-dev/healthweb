import React from 'react';
import { Container, Col, Row } from "react-bootstrap"
import Header from './Header'
import Intro from './Intro'
import Explore from './Explore';
import BlogPage2 from './BlogPage2';
import Allposts from './Allposts';


function Home () {
  return (
    <Col>
       
      <Intro />
      <Explore />
      <BlogPage2 />
      <Allposts />

  
    </Col>
  )
}





export default Home;
