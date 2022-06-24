import React from "react"
import { Container, Row, Col, Stack, Button } from "react-bootstrap"
import {
  
  Form,
  FormGroup,
  FormLabel,
  FormCheck,
  FormControl,
  FormText,
} from "react-bootstrap";




function ManageLogin () {
  return (



    <Container fluid className="w-50 mt-5 postform ">
     
      <Form className="mx-auto w-50">
        
        <h5 className="text-center">Manage Login</h5>
        <Stack gap={5}>
          <Col>
            <Container>
              <FormGroup>
                <FormLabel>Username</FormLabel>
                <FormControl type="text" placeholder="Enter Username" />
              </FormGroup>
            </Container>
          </Col>
          <Col>
            <Container>
              <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormControl type="text" placeholder="Enter Password" />
              </FormGroup>
            </Container>
          </Col>
          <Row className="mx-auto"><Button className="btn-lg">Submit</Button></Row>
        </Stack>
      </Form>
    </Container>

  )}


export default ManageLogin
