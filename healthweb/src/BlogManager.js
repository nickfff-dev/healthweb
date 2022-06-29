import React, { useEffect, useState } from "react";
import { Container, Col, Row, Stack, Button } from "react-bootstrap";
import profpic from "./unnamed.webp";
import {
  Table,
  Nav,

  Navbar,

  Form,
  FormGroup,
  FormLabel,
  FormCheck,

  FormControl,
} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Editor } from "react-bootstrap-editor";
import { useQuery } from "@apollo/client";
import { gql, useMutation } from "@apollo/client"; 
import ManageLogin from "./ManageLogin";




function BlogManager() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("");
  const[id, setId] = useState("");
 
  const [trending, setTrending] = useState(false);
  const[featured, setFeatured] = useState(false);


  const { data } = useQuery(gql`query PostType{posts{id title author category coverImage updatedAt createdAt featured trending body}}`)



  const onTitleChange = (e) => {
   setTitle(e.target.value);
  }


  

  const onCoverImageChange = (e) => {
    setCoverImage(e.target.value);
  }
  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const onBodyChange = (Editor) => {
    setBody(Editor);
    
    
  }
 


  const onTrendingChange = (e) => { 
    setTrending(e.target.checked);
  }
 
  const onFeaturedChange = (e) => { 
    setFeatured(e.target.checked);
  }


  const editPost = gql`mutation updatePost($id: String!, $title: String!, $body: String!, $author: String!, $coverImage: String!, $category: String!,  $trending: Boolean!, $featured: Boolean!) {
    updatePost(id: $id, title: $title, body: $body, author: $author, coverImage: $coverImage, category: $category, createdAt: $createdAt, trending: $trending, featured: $featured) {
      id title body author coverImage category createdAt trending featured
    }
  }`

  const [updatePost] = useMutation(editPost)

 
  useEffect(() => {  
    const mtu = localStorage.getItem("AUTH_TOKEN")
    console.log(`mtu: ${mtu}`)
    setUser(mtu)
  },[user])

  return (
    <>
      {user === null ? <ManageLogin /> : (
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
                    alt="sema"                 />
               </Navbar.Brand>
               
               <Nav className="me-auto text-white">
                 <Nav.Link className="text-white" onClick={() => {
                    localStorage.removeItem("AUTH_TOKEN");
                    navigate("/manage-login");
                   
                 
               }} >
                   {
                     user ? "Logout" : "Login"
                     
                   }
                 </Nav.Link>
                 <Nav.Link className="text-white" >
                   {
                    user? user : "not logged in"
                   }
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
                <div className="d-flex flex-row align-items-center justify-content-between">
                <Form  onSubmit={() => {
                  updatePost({ variables: { id: id, trending: trending,
                  } })

                  
               }}>
                 <h5 className="text-center">Post ID Title</h5>
                 
                  
                  
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
                  <Container><input type="submit" value="submit"/></Container>
                    </Form>
                    
                    
                   <Form onSubmit={() => {
                  updatePost({variables: {id:id, featured: featured} })

                  
               }}>
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
                  <Container><input type="submit" value="submit"/></Container>
                   </Form>
                <Form onSubmit={() => {
                  updatePost({variables: {id: id, title:title} })

                  
               }}>
                   <Col>
                     <FormGroup>
                       <FormLabel>Title</FormLabel>
                       <FormControl type="text" placeholder="Enter Title" value={title}  onChange={onTitleChange} />
                     </FormGroup>
                  </Col>
                  <Container><input type="submit" value="submit"/></Container>
                   </Form>
                <Form onSubmit={() => {
                  updatePost({ variables: { id: id, category: category } })

                  
               }}>
                   <Col>
                     {" "}
                     <FormGroup>
                       <FormLabel>Category</FormLabel>
                       <FormControl as="select" onChange={onCategoryChange} value={category}>
                         <option value="Nutrition">Nutrition</option>
                         <option value="Mental Health">Mental Health</option>
                         <option value="Well Being">Well Being</option>
                         <option value="Product Review">Product Review</option>
                       </FormControl>
                    </FormGroup>{" "}
                    <Container><input type="submit" value="submit"/></Container>
                   </Col>
                   </Form>
                <Form onSubmit={() => {
                  updatePost({variables: {id: id, coverImage:coverImage} })

                  
               }}>
                
                   <Col>
                     {" "}
                     <FormGroup>
                       <FormLabel>Image</FormLabel>
                       <FormControl type="text" placeholder="Enter Image URL" onChange={onCoverImageChange} value={coverImage} />
                     </FormGroup>
                     {" "}
                  </Col>
                  <Container><input type="submit" value="submit"/></Container>
                    </Form>
                   </div>
                 
                <Row>
                <Form onSubmit={() => {
                  updatePost({variables: {id:id,body:body} })

                  
               }}>
                 <Row className="mt-3 w-50 mx-auto">
                   <Col>
                     <Container>
                     <FormGroup className="text-center">
                       <FormLabel>Body</FormLabel>
                       <FormControl as={Editor} value={body}  onChange={onBodyChange} />
                     </FormGroup>
                       <Container><input type="submit" value="submit"/></Container>
                       </Container>
                   </Col>
                   </Row>
                </Form>
           </Row>
                    
              
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
                               setId(post.id)
                               setTitle(post.title)
                               setBody(post.body)
                               setCoverImage(post.coverImage)
                               setCategory(post.category)
                               setTrending(post.trending)
                               setFeatured(post.featured)
                               
                               
                               
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
      ) }
    </>
  );
}

export default BlogManager;
