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
import { Editor } from "react-bootstrap-editor";
import axios from "axios";

function BlogManager() {
  const [editorContent, setEditorContent] = useState("Browsers have added an internal aspect-ratio property that applies to replaced elements and other related elements that accept width and height attributes. This appears in the browser's internal UA stylesheet.");
  const onEditorChange = (content) => {
    setEditorContent(content);
    console.log(content);
  };
  const onSubmitHandler = (e) => {
   
var data = JSON.stringify({
  query: `mutation ($id: String! , $body: String!, $coverImage: String!, $trending: Boolean!, $published: Boolean! ){ updatePost(id: $id, body: $body, coverImage: $coverImage, trending: $trending, published: $published)
  {id title author category featured trending createdAt published body coverImage}}`,
  variables: {"id":"helpwith id","body":"dfdgfdjf","coverImage":"https://images.pexels.com/photos/551997/pexels-photo-551997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","trending":true,"published":false}
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
            <Form className="w-100" Method="Post" onSubmit={onSubmitHandler}>
              <h5 className="text-center">Post ID Title</h5>
              <Row>
               
               
                <Col>
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
                <Col>
                  <FormGroup>
                    <FormLabel>Title</FormLabel>
                    <FormControl type="text" placeholder="Enter Title" />
                  </FormGroup>
                </Col>
                <Col>
                  {" "}
                  <FormGroup>
                    <FormLabel>Category</FormLabel>
                    <FormControl as="select">
                      <option>Select</option>
                      <option>Nutrition</option>
                      <option>Mental Health</option>
                      <option>Well Being</option>
                      <option>Product Review</option>
                    </FormControl>
                  </FormGroup>{" "}
                </Col>
                <Col>
                  {" "}
                  <FormGroup>
                    <FormLabel>Image</FormLabel>
                    <FormControl type="text" placeholder="Enter Image URL" />
                  </FormGroup>
                  {" "}
                </Col>
                
              </Row>
              <Row className="mt-3 w-50 mx-auto">
                <Col>
                  <Container>
                  <FormGroup className="text-center">
                    <FormLabel>Body</FormLabel>
                    <Editor value={ editorContent} onChange={onEditorChange} />
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
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>Post 1</td>
                  <td>Jane Doe</td>
                  <td>11/11/2019</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td>True</td>
                  <td>True</td>
                  <td>Health</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>1</td>
                  <td>Post 1</td>
                  <td>Jane Doe</td>
                  <td>11/11/2019</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td>True</td>
                  <td>True</td>
                  <td>Health</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1</td>
                  <td>Post 1</td>
                  <td>Jane Doe</td>
                  <td>11/11/2019</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td>True</td>
                  <td>True</td>
                  <td>Health</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>1</td>
                  <td>Post 1</td>
                  <td>Jane Doe</td>
                  <td>11/11/2019</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                  <td>True</td>
                  <td>True</td>
                  <td>Health</td>
                  <td>Edit</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Col>
      </Stack>
    </Col>
  );
}

export default BlogManager;
