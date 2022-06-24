import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Stack,
  Collapse,
  InputGroup,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import frontimg from "./Mask Group.svg";
import contactimg from "./contactimg.svg";
import { TelephoneFill, Globe2, EnvelopeFill } from "react-bootstrap-icons";
import Header from "./Header";

function Contact() {
  return (
    <Col>
      <Header/>
    <Container>
    
      <div className="d-flex flex-row align-items-center justify-content-center mt-5">
        <Col>
          <Container>
            <div className="d-flex flex-column justify-content-end ">
              <img
                src={contactimg}
                alt="contactimg"
                className="img-fluid mb-5"
                width="300px"
                height="181px"
              />
              <h3 className="mb-4">Address</h3>
              <p className="mb-4">
                Id convallis placerat sit sed duis id amet volutp
              </p>
              <h3 className="mb-4">Phone</h3>
              <li className="list-group-item border-0">
                <TelephoneFill /> +1 (123) 456-7890
              </li>
              <li className="list-group-item border-0 mb-4">
                {" "}
                <TelephoneFill />
                &nbsp; +1 (123) 456-7890
              </li>
              <h3 className="mb-4">Online Service</h3>

              <li className="list-group-item border-0 mb-2">
                <EnvelopeFill size={20} /> &nbsp;
                email
              </li>
              <li className="list-group-item border-0">
                <Globe2 size={20} /> &nbsp;
                website
              </li>
            </div>
          </Container>
        </Col>
        <Col className="mb-5">
          <Form className="form">
            <h4 className="mb-5">Send Us a Message</h4>
            <FormGroup className="mb-5">
              <FormLabel>Full Name</FormLabel>
              <FormControl type="text" placeholder="Enter your name" />
            </FormGroup>
            <FormGroup className="mb-5">
              <FormLabel>Email</FormLabel>
              <FormControl type="email" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup className="mb-5">
              <FormLabel>Message</FormLabel>
              <FormControl as="textarea" rows="3" />
            </FormGroup>
            <Button className="mb-5 text-center" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </div>
     

      </Container>
      <div className="futwrap"><Footer/></div>
      </Col >
  );
}

export default Contact;
