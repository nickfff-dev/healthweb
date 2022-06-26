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
    const onUsernameChange = (event) => { 
      setUsername(event.target.value)
    }
  
    const onPasswordChange = (event) => { 
      setPassword(event.target.value)
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
      axios.post("http://localhost:5000/api/auth/register", {
        username: username,
        password: password,
      })
        .then((res) => {
          console.log(res)
          localStorage.setItem("token", res.data.token)
          
        }).catch((err) => {
          console.log(err)
          setError(err.response.data.message)
        }
        )
  
    }
  
    return (
      <Container fluid className="w-50 mt-5 postform d-flex  ">
        <Row>
          <Col>
            <Form method="POST" onSubmit={onSubmit}>
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
