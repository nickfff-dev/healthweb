import React,{useState} from "react"
import { Container, Col, Stack} from "react-bootstrap"
import {
  
  Form,
  FormGroup,
  FormLabel,

  FormControl,

} from "react-bootstrap";
import { useMutation, gql } from '@apollo/client';
import { useNavigate, Link } from 'react-router-dom';









function ManageLogin() {

  const [email, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
 

  
 
  const onEmailChange = (event) => { 
    setUsername(event.target.value)
  }

  const onPasswordChange = (event) => { 
    setPassword(event.target.value)
  }
  



const LOGIN_MUTATION = gql`
  mutation LoginUser(
    $email: String!
    $password: String!
  ) {
    LoginUser(email: $email, password: $password) {
      name email
    }
  }
`;
  
  const [login, { error }] = useMutation(LOGIN_MUTATION);
  
  
  
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (email && password) {
      login({ variables: { email, password } })
        .then(({ data }) => { 
          if (data) {
            console.log(data)
            localStorage.setItem("AUTH_TOKEN", data.LoginUser.name);
            navigate(`/blogmanager`)

          }
          if (error) {
            alert("Invalid email or password")
          }
        })
    }

  }






  return (



    <Container fluid className="w-50 mt-5 postform ">
     
      <Form className="mx-auto w-50" onSubmit={onSubmitHandler} >
        
        <h5 className="text-center">signin</h5>
        <Stack gap={5}>

         



          <Col>
            <Container>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl type="text" placeholder="Enter Email" onChange={onEmailChange} value={email} />
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
          <Col className="mx-auto">
            <input className="btn-lg" value="submit" type="submit" />
            <span><Link to="/create-user" >Signup</Link></span>
              
            

            
            
          </Col>
        </Stack>
      </Form>
    </Container>

  )}


export default ManageLogin
