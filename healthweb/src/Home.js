import React from 'react';
import { Container, Col,Stack } from "react-bootstrap"
import Header from './Header'
import Intro from './Intro'
import Explore from './Explore';
import BlogPage2 from './BlogPage2';
import Allposts from './Allposts';

import Footer from './Footer';
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";


function Home() {
  const categoryQuery = gql`query singlecategory($category: String!){singlecategory(category:$category)
    {id title body author category createdAt coverImage featured trending}}`
    const { loading, error, data } = useQuery(categoryQuery, {
      variables: { category: "" },
    })

  if (error) return <p>Error :(</p> 

  return (
    <Col>
      <Header />
<Stack>
      
        <Intro />
        
      
        <Explore />
      
     <Container>
          { loading ? <p>Loading featured posts...</p> : <BlogPage2 data={ data} />}</Container>
    
        <Container>{
          loading ? <p>Loading all posts...</p> :
          <Allposts data={data} />}</Container>
        
<Footer/>
       

        </Stack>
    </Col>
  )
}





export default Home;
