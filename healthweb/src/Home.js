import React from 'react';
import { Container, Col, Row, Stack } from "react-bootstrap"
import Header from './Header'
import Intro from './Intro'
import Explore from './Explore';
import BlogPage2 from './BlogPage2';
import Allposts from './Allposts';
import SideBar from './SideBar';


function Home () {
  return (
    <Col>
      <Header />
<Stack>
      
        <Intro />
        
      
        <Explore />
      
     <Container>
        <BlogPage2 /></Container>
    
        <Container><Allposts /></Container>
       

        </Stack>
    </Col>
  )
}





export default Home;
