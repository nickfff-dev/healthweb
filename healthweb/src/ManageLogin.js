import React,{useState, useNavigate} from "react"
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







function ManageLogin() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

 
  const onUsernameChange = (event) => { 
    setUsername(event.target.value)
  }

  const onPasswordChange = (event) => { 
    setPassword(event.target.value)
  }
  


  const onSubmitHandler = (e) => {
    const data = {
      username: username,
      password: password
}

    

   
}



  return (



    <Container fluid className="w-50 mt-5 postform ">
     
      <Form className="mx-auto w-50" method= "POST" >
        
        <h5 className="text-center">Manage Login</h5>
        <Stack gap={5}>
          <Col>
            <Container>
              <FormGroup>
                <FormLabel>Username</FormLabel>
                <FormControl type="text" placeholder="Enter Username" onChange={onUsernameChange} value={username} />
              </FormGroup>
            </Container>
          </Col>
         
          <Col>
            <Container>
              <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormControl type="text" placeholder="Enter Password" onChange={onPasswordChange} value={password} />
              </FormGroup>
            </Container>
          </Col>
          <Row className="mx-auto"><input className="btn-lg" type="submit" value="submit" onSubmit= {onSubmitHandler}/></Row>
        </Stack>
      </Form>
    </Container>

  )}


export default ManageLogin
