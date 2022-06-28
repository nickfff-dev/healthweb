import React, { useState} from "react";
import { Container, Row, Col } from "react-bootstrap"
import {
  
  Form,
  FormGroup,
  FormLabel,

  FormControl,

} from "react-bootstrap";
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';









function CreateUser() {
  const navigate = useNavigate();
  const SIGNUP_MUTATION = gql`
  mutation SignupUser(
    $email: String!
    $password: String!
    $name: String!
  ) {
    SignupUser(
      email: $email
      password: $password
      name: $name
    ) {
      name email 
    }
  }
`;

  const [signup] = useMutation(SIGNUP_MUTATION);
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }
    
  
    const onPasswordChange = (event) => { 
      setPassword(event.target.value)
  }
  
  const onNameChange = (event) => { 
    setName(event.target.value)
  }
  
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (email &&  password && name) { 
      signup({ variables: { email, password, name } })
        .then(({ data }) => { 
          if (data) {
            console.log(data)
          localStorage.setItem("AUTH_TOKEN", data.SignupUser.name);
          navigate(`/blogmanager`)
          }

        }).catch(err => {
          console.log(err)
          
        }).finally(() => {
          setEmail("")
          setPassword("")
        }
        )
    }
     
     
  }
  
    return (
      <Container fluid className="w-50 mt-5 postform d-flex  ">
        <Row>
          <Col>
            <Form  onSubmit= {onSubmitHandler}>
              <FormGroup>
                <FormLabel>email</FormLabel>
                <FormControl
                  type="text"
                  name="email"
                  value={email}
                  onChange={onEmailChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>userName</FormLabel>
                <FormControl
                  type="text"
                  name="name"
                  value={name}
                  onChange={onNameChange}
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
              <input type="submit" value="submit" />
            </Form>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    );
}


export default CreateUser;
