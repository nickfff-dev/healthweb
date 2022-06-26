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




function CreatePost() {
  
 

  const [newPost, setNewPost] = useState({
    id: "thoma5690syu", body: "", coverImage: "", title: "", author: "", category: "",
  });

  const onTitleChange = (e) => {
    setNewPost({ ...newPost, title: e.target.value });
  }


  

  const onCoverImageChange = (e) => {
    setNewPost({ ...newPost, coverImage: e.target.value });
  }
  const onCategoryChange = (e) => {
    setNewPost({ ...newPost, category: e.target.value });
  }
  const onAuthorChange = (e) => {
    setNewPost({ ...newPost, author: e.target.value });
  }

  const onBodyChange = (e) => {
    setNewPost({ ...newPost, body: e.target.value });
    
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
            <Form className="w-100">
              <h5 className="text-center">Post ID Title</h5>
              
               
              <Stack gap={5}>
                
              <Col>
                <Container>
                  <FormGroup>
                    <FormLabel>Title</FormLabel>
                    <FormControl type="text" placeholder="Enter Title" value={newPost.title} onChange={ onTitleChange} />
                  </FormGroup>
                  </Container>
              </Col>
              <Col>
                <Container>
                  <FormGroup>
                    <FormLabel>Author</FormLabel>
                    <FormControl type="text" placeholder="Enter Author" value={newPost.author} onChange={onAuthorChange} />
                  </FormGroup>
                  </Container>
                </Col>
                <Col>
              
                <FormGroup>
                <Container>
                    <FormLabel>Category</FormLabel>
                    <FormControl as="select" value={newPost.category} onChange={onCategoryChange}>
                     
                      <option value="Nutirition">Nutrition</option>
                      <option value="Mental Health">Mental Health</option>
                      <option value="Well Being">Well Being</option>
                      <option value="Product Review">Product Review</option>
                  </FormControl>
                  </Container>
                  </FormGroup>{" "}
                </Col>
                <Col>
                <Container>
                  <FormGroup>
                    <FormLabel>Image</FormLabel>
                    <FormControl type="text" placeholder="Enter Image URL" value={newPost.coverImage} onChange={onCoverImageChange } />
                  </FormGroup>
                  </Container>
                </Col>
                
              
              <Row className="mt-3">
                <Col>
                  <Container>
                  <FormGroup>
                    <FormLabel>Body</FormLabel>
                      <FormControl as="textarea" rows={10} type="text" placeholder="Enter body" value={newPost.body} onChange={onBodyChange} />
                  </FormGroup>
                    
                    </Container>
                </Col>
              </Row>
              <Row className="mx-auto">
            <input type="submit" value="submit" />
                
              </Row>
              
              </Stack>
            </Form>
          </Container>
        </Col>

        
     
    </Col>
    


          )
          }


export default CreatePost
