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
   const navigate = useNavigate()
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
    axios.post("http://localhost:5000/api/users/login", {
      username: username,
      password: password,
    })
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        navigate("/blog-manager")
      }).catch((err) => {
        console.log(err)
        setError(err.response.data.message)
      }
      )
  
}



  return (



    <Container fluid className="w-50 mt-5 postform ">
     
      <Form className="mx-auto w-50">
        
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
          <Row className="mx-auto"><Button className="btn-lg">Submit</Button></Row>
        </Stack>
      </Form>
    </Container>

  )}


export default ManageLogin
