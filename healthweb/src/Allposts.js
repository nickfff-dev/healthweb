import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { BookmarkFill, ShareFill } from "react-bootstrap-icons";

function Allposts() {
  return (
    <Col>
      <h3>All posts</h3>
      <Col>
        <div className="d-flex flex-column justify-content-evenly">
          <Container style={{padding: "2rem 4rem 4rem"}}>
            <div className="d-flex flex-row align-items-end justify-content-between">
             
                <div>
                  <img
                  src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="500px"
                  height="300px"
                   
                    className="img-fluid  rounded-3"
                  />
                </div>
                <div className="px-3">
                  <h1>
                    What Is White Fragility? 5 Key Steps for Overcoming It
                  </h1>
                  <p>
                    Professor and diversity consultant Robin DiAngelo brought
                    the concept of white fragility into public awareness in
                    “White Fragility: Why It’s So Hard for White People to Talk
                    About Racism.
                  </p>
                  <div className="d-flex align-items-center justify-content-around flex-row">
                    <Col>
                      <Stack gap={2}>
                        <span>Author Name</span>
                        <span className="text-mute">May 5 3min read</span>
                      </Stack>
                    </Col>
                    <Col>
                      <div className="d-flex flex-row justify-content-evenly">
                        <BookmarkFill className="icon" />
                        <ShareFill className="icon" />
                      </div>
                    </Col>
                  </div>
                </div>
              
            </div>
          </Container>
          <Container style={{padding: "2rem 4rem 4rem"}}>
            <div className="d-flex flex-row align-items-end justify-content-between">
             
                <div>
                  <img
                  src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="500px"
                  height="300px"
                   
                    className="img-fluid  rounded-3"
                  />
                </div>
                <div className="px-3">
                  <h2>
                    What Is White Fragility? 5 Key Steps for Overcoming It
                  </h2>
                  <p>
                    Professor and diversity consultant Robin DiAngelo brought
                    the concept of white fragility into public awareness in
                    “White Fragility: Why It’s So Hard for White People to Talk
                    About Racism.
                  </p>
                  <div className="d-flex align-items-center justify-content-around flex-row">
                    <Col>
                      <Stack gap={2}>
                        <span>Author Name</span>
                        <span className="text-mute">May 5 3min read</span>
                      </Stack>
                    </Col>
                    <Col>
                      <div className="d-flex flex-row justify-content-evenly">
                        <BookmarkFill className="icon" />
                        <ShareFill className="icon" />
                      </div>
                    </Col>
                  </div>
                </div>
              
            </div>
          </Container>
          <Container style={{padding: "2rem 4rem 4rem"}}>
            <div className="d-flex flex-row align-items-end justify-content-between">
             
                <div>
                  <img
                  src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="500px"
                  height="300px"
                   
                    className="img-fluid  rounded-3"
                  />
                </div>
                <div className="px-3">
                  <h1>
                    What Is White Fragility? 5 Key Steps for Overcoming It
                  </h1>
                  <p>
                    Professor and diversity consultant Robin DiAngelo brought
                    the concept of white fragility into public awareness in
                    “White Fragility: Why It’s So Hard for White People to Talk
                    About Racism.
                  </p>
                  <div className="d-flex align-items-center justify-content-around flex-row">
                    <Col>
                      <Stack gap={2}>
                        <span>Author Name</span>
                        <span className="text-mute">May 5 3min read</span>
                      </Stack>
                    </Col>
                    <Col>
                      <div className="d-flex flex-row justify-content-evenly">
                        <BookmarkFill className="icon" />
                        <ShareFill className="icon" />
                      </div>
                    </Col>
                  </div>
                </div>
              
            </div>
          </Container>
          <Container style={{padding: "2rem 4rem 4rem"}}>
            <div className="d-flex flex-row align-items-end justify-content-between">
             
                <div>
                  <img
                  src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width="500px"
                  height="300px"
                   
                    className="img-fluid  rounded-3"
                  />
                </div>
                <div className="px-3">
                  <h1>
                    What Is White Fragility? 5 Key Steps for Overcoming It
                  </h1>
                  <p>
                    Professor and diversity consultant Robin DiAngelo brought
                    the concept of white fragility into public awareness in
                    “White Fragility: Why It’s So Hard for White People to Talk
                    About Racism.
                  </p>
                  <div className="d-flex align-items-center justify-content-around flex-row">
                    <Col>
                      <Stack gap={2}>
                        <span>Author Name</span>
                        <span className="text-mute">May 5 3min read</span>
                      </Stack>
                    </Col>
                    <Col>
                      <div className="d-flex flex-row justify-content-evenly">
                        <BookmarkFill className="icon" />
                        <ShareFill className="icon" />
                      </div>
                    </Col>
                  </div>
                </div>
              
            </div>
          </Container>
        </div>
      </Col>
    </Col>
  );
}

export default Allposts;
