import React from 'react';
import { Container, Col, Row, Stack } from "react-bootstrap"
import Header from './Header'
import Intro from './Intro'
import Explore from './Explore';
import BlogPage2 from './BlogPage2';
import Allposts from './Allposts';
import SideBar from './SideBar';
import Footer from './Footer';
import { useQuery } from "@apollo/client";
import { gql, useMutation } from "@apollo/client";


function Home(props) {
  const { data } = useQuery(gql`query PostType{posts{id title author category coverImage updatedAt createdAt featured trending body}}`)
  return (
    <Col>
      <Header />
<Stack>
      
        <Intro />
        
      
        <Explore />
      
     <Container>
        <BlogPage2 /></Container>
    
        <Container><Allposts data={data} /></Container>
        
<Footer/>
       

        </Stack>
    </Col>
  )
}





export default Home;
