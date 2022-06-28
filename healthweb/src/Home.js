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
  const categoryQuery = gql`query singlecategory($category: String!){singlecategory(category:$category)
    {id title body author category createdAt coverImage featured trending}}`
    const { loading, error, data } = useQuery(categoryQuery, {
      variables: { category: "" },
      })
  return (
    <Col>
      <Header />
<Stack>
      
        <Intro />
        
      
        <Explore />
      
     <Container>
          <BlogPage2 data={ data} /></Container>
    
        <Container><Allposts data={data} /></Container>
        
<Footer/>
       

        </Stack>
    </Col>
  )
}





export default Home;
