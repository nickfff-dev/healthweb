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
     
     
  }
  
    return (
      <Container fluid className="w-50 mt-5 postform d-flex  ">
        <Row>
          <Col>
            <Form method="POST">
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
                <FormLabel>Email</FormLabel>
                <FormControl type="text" placeholder="Enter Email" onChange={onEmailChange} value={email} />
              </FormGroup>
        
              </FormGroup>
              <input type="submit" value="submit" onSubmit= {onSubmitHandler}/>
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
