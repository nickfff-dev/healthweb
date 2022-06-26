import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { BookmarkFill, ShareFill } from "react-bootstrap-icons";
import { ArrowRightCircle } from "react-bootstrap-icons";




function BlogPage2() {
 
  
  return (
    <Col style={{ padding: "2rem 4rem 4rem" }}>
      <h3 style={{color: "#1F3F68"}}>Popular</h3>
      <Container style={{ padding: "2rem 4rem 4rem" }}>
        <div className="d-flex align-content-center justify-content-center">
          <Row>
            <Col>
              <h1 style={{color: "#1F3F68"}}>What Is White Fragility? 5 Key Steps for Overcoming It</h1>
              <p className="py-5">
                Professor and diversity consultant Robin DiAngelo brought the
                concept of white fragility into public awareness in “White
                Fragility: Why It’s So Hard for White People to Talk About
                Racism.
              </p>
              <div className="d-flex align-items-center justify-content-around flex-row">
                <Col>
                  <Stack gap={2}>
                    <span style={{color: "#1F3F68", fontWeight: "bold"}}>Author Name</span>
                    <span className="text-muted">May 5 3min read</span>
                  </Stack>
                </Col>
                <Col>
                  <div className="d-flex flex-row justify-content-evenly"style={{color: "#1F3F68"}}>
                    <BookmarkFill className="icon" />
                    <ShareFill className="icon" />
                  </div>
                </Col>
              </div>
            </Col>
            <Col>
              <img
                src="https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?cs=srgb&dl=pexels-element-digital-775032.jpg&fm=jpg"
                className="img-fluid  rounded-2"
               
                style={{aspectRatio: "1/1"}}
              />
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="d-flex flex-row justify-content-between">
          <Col className="px-3">
            <img
              src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid  rounded-2 mb-3"
              style={{aspectRatio: "1/0.65"}}
            />
            <h2 style={{color: "#1F3F68"}}>How LGBTQIA+ Elders Can Get the Care and Support They Need</h2>
            <p>
              In a culture that often centers and exalts the realities of youth,
              little attention is paid to older queer people and the many
              intersectional identities they inhabit. The concerns that mark
              their day-to-day lives are frequently overlooked.
            </p>
            <div className="d-flex align-items-center justify-content-around flex-row">
              <Col>
                <Stack gap={2}>
                  <span style={{color: "#1F3F68", fontWeight: "bold"}}>Author Name</span>
                  <span className="text-muted">May 5 3min read</span>
                </Stack>
              </Col>
              <Col>
                <div className="d-flex flex-row justify-content-evenly" style={{color: "#1F3F68", fontWeight: "bold"}}>
                  <BookmarkFill className="icon" />
                  <ShareFill className="icon" />
                </div>
              </Col>
            </div>
          </Col>
          <Col className="px-3">
            <img
              src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid rounded-2 mb-3"
              style={{aspectRatio: "1/0.65"}}
            />
            <h2 style={{color: "#1F3F68"}}>How LGBTQIA+ Elders Can Get the Care and Support They Need</h2>
            <p>
              In a culture that often centers and exalts the realities of youth,
              little attention is paid to older queer people and the many
              intersectional identities they inhabit. The concerns that mark
              their day-to-day lives are frequently overlooked.
            </p>
            <div className="d-flex align-items-center justify-content-around flex-row">
              <Col>
                <Stack gap={2}>
                  <span style={{color: "#1F3F68", fontWeight: "bold"}}>Author Name</span>
                  <span className="text-muted">May 5 3min read</span>
                </Stack>
              </Col>
              <Col>
                <div className="d-flex flex-row justify-content-evenly" style={{color: "#1F3F68"}}>
                  <BookmarkFill className="icon" />
                  <ShareFill className="icon" />
                </div>
              </Col>
            </div>
          </Col>
          <Col className="px-3">
            <img
              src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid  rounded-2 mb-3"
              style={{aspectRatio: "1/0.65"}}
            />
            <h2 style={{color: "#1F3F68"}}>How LGBTQIA+ Elders Can Get the Care and Support They Need</h2>
            <p>
              In a culture that often centers and exalts the realities of youth,
              little attention is paid to older queer people and the many
              intersectional identities they inhabit. The concerns that mark
              their day-to-day lives are frequently overlooked.
            </p>
            <div className="d-flex align-items-center justify-content-around flex-row">
              <Col>
                <Stack gap={2}>
                  <span style={{color: "#1F3F68", fontWeight: "bold"}}>Author Name</span>
                  <span className="text-muted">May 5 3min read</span>
                </Stack>
              </Col>
              <Col>
                <div className="d-flex flex-row justify-content-evenly" style={{color: "#1F3F68"}}>
                  <BookmarkFill className="icon" />
                  <ShareFill className="icon" />
                </div>
              </Col>
            </div>
          </Col>
        </div>
      </Container>

      <Container style={{ padding: "4rem 0rem 2rem" }}>
        <Col>
          <h3 style={{color: "#1F3F68"}}>See all popular articles  <ArrowRightCircle className="arrow fal" /></h3>
        </Col>
      </Container>
      <hr />
    </Col>
  );
}

export default BlogPage2;
