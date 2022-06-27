import React, { useState, useNavigate } from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap"
import {
  
  Form,
  FormGroup,
  FormLabel,
  FormCheck,
  FormControl,
  FormText,
} from "react-bootstrap";

import axios from "axios"




function ManageRegister() {

  
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [email, setEmail] = useState("")
  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }
    const onUsernameChange = (event) => { 
      setUsername(event.target.value)
    }
  
    const onPasswordChange = (event) => { 
      setPassword(event.target.value)
    }
  
    const onSubmitHandler = (e) => {
      const user = {
        username: username,
        password: password,
        email: email
  
      }
      axios.post("http://localhost:5000/signup", user)
        .then((res) => {
          if (res.data === "user created") {
            window.location.href = "/blogmanager"
          } else {
            alert("signup failed failed")
          }
         })
     
  }
  
    return (
      <Container fluid className="w-50 mt-5 postform d-flex  ">
        <Row>
          <Col>
            <Form method="POST" onSubmit={onSubmitHandler}>
              <FormGroup>
                <FormLabel>Username</FormLabel>
                <FormControl
                  type="text"
                  name="username"
                  value={username}
                  onChange={onUsernameChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  name="password"
                  value={password}
                  onChange={onPasswordChange}
                />
               
        
              <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormControl type="text" placeholder="Enter Email" onChange={onEmailChange} value={email} />
              </FormGroup>
        
              </FormGroup>
              <input type="submit" value="submit"/>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{error}</p>
          </Col>
        </Row>
      </Container>
    );
}


export default ManageRegister;
