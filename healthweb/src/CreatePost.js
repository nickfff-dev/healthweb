import React, { useState } from "react";
import { Container, Col, Row, Stack, Button } from "react-bootstrap";
import profpic from "./unnamed.webp";
import {
  Table,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  Form,
  FormGroup,
  FormLabel,
  FormCheck,
  FormText,
  FormControl,
} from "react-bootstrap";
import axios from "axios";



function CreatePost () {
  const [editorContent, setEditorContent] = useState("Browsers have added an internal aspect-ratio property that applies to replaced elements and other related elements that accept width and height attributes. This appears in the browser's internal UA stylesheet.");
  const onEditorChange = (content) => {
    setEditorContent(content);
    console.log(content);
  }

  const onSubmitHandler = (e) => { 
    
var data = JSON.stringify({
  query: `mutation ($id: String! , $author: String!, $title: String!, $body: String!, $coverImage: String!, $trending: Boolean!, $published: Boolean!, $category: String!, $featured: Boolean!, $createdAt: String! ){ createPost(id: $id, body: $body, coverImage: $coverImage, trending: $trending, published: $published, category: $category, featured: $featured, title:$title, createdAt: $createdAt, author: $author)
  {id title author category featured trending createdAt published body coverImage}}`,
  variables: {"id":"postman1","body":"postman and asap rocky did ths","coverImage":"https://images.pexels.com/photos/557662/pexels-photo-557662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","trending":true,"published":false,"createdAt":"sai tu","featured":true,"category":"well-being","author":"asaprockydidthi","title":"almost there"}
});

var config = {
  method: 'post',
  url: 'http://localhost:5000/graphql',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

  }

  return (
    <Col>
      <Row>
        <Navbar className="mananav">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={profpic}
                width="50px"
                height="50px"
                className="img-fluid rounded"
              />
            </Navbar.Brand>
            <Nav className="me-auto text-white">
              <Nav.Link className="text-white" href="#home">
                Hi Jane
              </Nav.Link>
              <Nav.Link className="text-white" href="#features">
                LogOut
              </Nav.Link>
              <Nav.Link className="text-white" href="/blogmanager">
               BlogManager
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Row>
      
        <Col>
          <Container fluid className="px-3 mt-5 postform">
            <h4 className="text-center">Post Editor</h4>
            <Form className="w-100" method="POST" onSubmit={onSubmitHandler}>
              <h5 className="text-center">Post ID Title</h5>
              
               
              <Stack gap={5}>
                
              <Col>
                <Container>
                  <FormGroup>
                    <FormLabel>Title</FormLabel>
                    <FormControl type="text" placeholder="Enter Title" />
                  </FormGroup>
                  </Container>
              </Col>
              <Col>
                <Container>
                  <FormGroup>
                    <FormLabel>Author</FormLabel>
                    <FormControl type="text" placeholder="Enter Author" />
                  </FormGroup>
                  </Container>
                </Col>
                <Col>
              
                <FormGroup>
                <Container>
                    <FormLabel>Category</FormLabel>
                    <FormControl as="select">
                      <option>Select</option>
                      <option>Nutrition</option>
                      <option>Mental Health</option>
                      <option>Well Being</option>
                      <option>Product Review</option>
                  </FormControl>
                  </Container>
                  </FormGroup>{" "}
                </Col>
                <Col>
                <Container>
                  <FormGroup>
                    <FormLabel>Image</FormLabel>
                    <FormControl type="text" placeholder="Enter Image URL" />
                  </FormGroup>
                  </Container>
                </Col>
                
              
              <Row className="mt-3">
                <Col>
                  <Container>
                  <FormGroup>
                    <FormLabel>Body</FormLabel>
                    <FormControl as="textarea"  rows={10} type="text" placeholder="Enter body" />
                  </FormGroup>
                    
                    </Container>
                </Col>
              </Row>
              <Row className="mx-auto">
              <Col >
                  {" "}
                  <FormGroup>
                    <FormLabel>Trending</FormLabel>
                    <FormCheck type="checkbox" label="True" />
                    <FormCheck type="checkbox" label="False" />
                  </FormGroup>
                </Col>
                
                <Col>
                  {" "}
                  <FormGroup>
                    <FormLabel>Feautered</FormLabel>
                    <FormCheck type="checkbox" label="True" />
                    <FormCheck type="checkbox" label="False" />
                  </FormGroup>{" "}
                </Col>
            <Button className="postbtn mt-5">Submit</Button>
                
              </Row>
              
              </Stack>
            </Form>
          </Container>
        </Col>

        
     
    </Col>
    


          )
          }


export default CreatePost
