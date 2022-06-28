import React, { useState } from "react";
import { Container, Col, Row, Stack } from "react-bootstrap";
import profpic from "./unnamed.webp";
import {
  
  Nav,
 
  Navbar,
  Form,
  FormGroup,
  FormLabel,
  
  FormControl,
} from "react-bootstrap";

import { gql, useMutation } from "@apollo/client";
import { v4 as uuidv4 } from 'uuid'





function CreatePost() {
  

const now = new Date().toISOString().split('T')[0];
 

  const [newPost, setNewPost] = useState({
    id: "worknow", body: "", coverImage: "", title: "", author: "", category: "", createdAt:""
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

  const makePost =gql` mutation createPost($id: String!, $title: String!, $body: String!, $author: String!, $coverImage: String!, $category: String!, $createdAt: String!) {
    createPost(id: $id, title: $title, body: $body, author: $author, coverImage: $coverImage, category: $category, createdAt: $createdAt) {
      id title body author coverImage category createdAt
    }
  }`

  const [createPost, { loading, error, data }] = useMutation(makePost)

  
  const onSubmitHandler = (e) => { 
    e.preventDefault();
    createPost({ variables: { id: uuidv4(), title: newPost.title, body: newPost.body, author: newPost.author, coverImage: newPost.coverImage, category: newPost.category,createdAt:now } })
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    if (data) return `Submission success! ${data.createPost.title}`;
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
                alt="goodboy"
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
            <h4 className="text-center">Create Post</h4>
          <Form className="w-100" onSubmit={onSubmitHandler}>
            
             
              
               
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
