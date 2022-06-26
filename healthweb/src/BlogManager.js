import React, { useEffect, useState } from "react";
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
import { Editor } from "react-bootstrap-editor";
import { useQuery } from "@apollo/client";
import { gql, useMutation } from "@apollo/client";


function BlogManager() {
  const [postArray, setPostArray] = useState()
  const { data } = useQuery(gql`query PostType{posts{id title author category coverImage updatedAt createdAt featured trending body}}`)






 

  const [newPost, setNewPost] = useState({});

  const onTitleChange = (e) => {
    setNewPost({ ...newPost, title: e.target.value });
  }


  

  const onCoverImageChange = (e) => {
    setNewPost({ ...newPost, coverImage: e.target.value });
  }
  const onCategoryChange = (e) => {
    setNewPost({ ...newPost, category: e.target.value });
  }

  const onBodyChange = (e) => {
    setNewPost({ ...newPost, body: Editor.value })
    
    
  }
 


  const onTrendingChange = (e) => { 
    setNewPost({ ...newPost, trending: e.target.checked });
  }
 
  const onFeaturedChange = (e) => { 
    setNewPost({ ...newPost, featured: e.target.checked });
  }


  const editPost = gql`mutation updatePost($id: String!, $title: String!, $body: String!, $author: String!, $coverImage: String!, $category: String!, $createdAt: String!, $trending: Boolean!, $featured: Boolean!) {
    updatePost(id: $id, title: $title, body: $body, author: $author, coverImage: $coverImage, category: $category, createdAt: $createdAt, trending: $trending, featured: $featured) {
      id title body author coverImage category createdAt trending featured
    }
  }`

  const [updatePost,{ loading, error }] = useMutation(editPost)

  const onSubmitHandler = (e) => {
    e.preventDefault();
    updatePost({ variables: { ...newPost } });

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
              <Nav.Link className="text-white" href="/create-post">
                CreatePost
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Row>
      <Stack gap={5}>
        <Col>
          <Container fluid className="px-3 mt-5 postform">
            <h4 className="text-center">Post Editor</h4>
            <Form className="w-100"  onSubmit={onSubmitHandler}>
              <h5 className="text-center">Post ID Title</h5>
              <Row>
               
               
                <Col>
                  {" "}
                  <FormGroup>
                    <FormLabel>Trending</FormLabel>
                    <FormCheck type="checkbox" label="True" value={true} onChange={
                      onTrendingChange
                    } />

                    <FormCheck type="checkbox" label="False" value={false}
                      onChange={onTrendingChange} />
                    
                  </FormGroup>
                </Col>
                
                <Col>
                  {" "}
                  <FormGroup>
                    <FormLabel>Feautered</FormLabel>
                    <FormCheck type="checkbox" label="True" value={true}
                      onChange={onFeaturedChange} />
                    
                    
                    <FormCheck type="checkbox" label="False" value={false}
                      onChange={onFeaturedChange} />
                    
                    
                  </FormGroup>{" "}
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Title</FormLabel>
                    <FormControl type="text" placeholder="Enter Title" value={newPost.title}  onChange={onTitleChange} />
                  </FormGroup>
                </Col>
                <Col>
                  {" "}
                  <FormGroup>
                    <FormLabel>Category</FormLabel>
                    <FormControl as="select" onChange={onCategoryChange} value={newPost.category}>
                      <option value="Nutrition">Nutrition</option>
                      <option value="Mental Health">Mental Health</option>
                      <option value="Well Being">Well Being</option>
                      <option value="Product Review">Product Review</option>
                    </FormControl>
                  </FormGroup>{" "}
                </Col>
                <Col>
                  {" "}
                  <FormGroup>
                    <FormLabel>Image</FormLabel>
                    <FormControl type="text" placeholder="Enter Image URL" onChange={onCoverImageChange} value={newPost.coverImage} />
                  </FormGroup>
                  {" "}
                </Col>
                
              </Row>
              <Row className="mt-3 w-50 mx-auto">
                <Col>
                  <Container>
                  <FormGroup className="text-center">
                    <FormLabel>Body</FormLabel>
                    <Editor value={newPost.body}  onChange={ onBodyChange} />
                  </FormGroup>
                    <Container><Button className="postbtn mt-5">Submit</Button></Container>
                    </Container>
                </Col>
                </Row>
                 
            </Form>
          </Container>
        </Col>

        <Col>
          <Container>
            <Table striped bordered hover responsive={true}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Post_Id</th>
                  <th>Post Title</th>
                  <th>Post Author</th>
                  <th>Post CreationDate</th>
                  <th>Post Content</th>
                  <th>Post trending</th>
                  <th>Post Status</th>
                  <th>Post Category</th>
                  <th>Post_Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data && data.posts.map((post, index) => { 
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.author}</td>
                        <td>{post.createdAt}</td>
                        <td>{post.body.substring(0, 100)}</td>
                        <td>{post.trending}</td>
                        <td>{post.featured}</td>
                        <td>{post.category}</td>
                        <td>
                          <Button variant="primary" className="btn-lg bg-dark text-white" onClick={() => { 
                            setNewPost({ ...post })
                          }}></Button>
                        </td>
                        
                      </tr>
                    )
                  })
              }
               
              </tbody>
            </Table>
          </Container>
        </Col>
      </Stack>
    </Col>
  );
}

export default BlogManager;
