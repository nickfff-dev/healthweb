import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { BookmarkFill, ShareFill } from "react-bootstrap-icons";
import axios from "axios";

function Allposts() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => { 
  
var data = JSON.stringify({
  query: `{posts{id title author coverImage createdAt published trending featured category body}}`,
  variables: {}
});

var config = {
  method: 'post',
  url: 'http://localhost:5000/graphql',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
  }, []);
  return (
    <Col>
      <h3 style={{color: "#1F3F68"}}>All posts</h3>
      <Col>
        <div className="d-flex flex-column justify-content-evenly">
          <Container style={{padding: "2rem 4rem 4rem"}}>
            <div className="d-flex flex-row align-items-end justify-content-between">
             
                <div>
                  <img
                  src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ aspectRatio: "1/0.65" }}
                  width="500px"
                  height="300px"
                  
                    className="img-fluid  rounded-3"
                  />
                </div>
                <div className="px-3">
                  <h2 style={{color: "#1F3F68"}}>
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
                        <span style={{color: "#1F3F68", fontWeight: "bold"}}>Author Name</span>
                        <span className="text-mute">May 5 3min read</span>
                      </Stack>
                    </Col>
                    <Col>
                      <div className="d-flex flex-row justify-content-evenly" style={{color: "#1F3F68", fontWeight: "bold"}}>
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
                  src="https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?cs=srgb&dl=pexels-element-digital-775032.jpg&fm=jpg"
                  style={{ aspectRatio: "1/0.65" }}
                  width="500px"
                  height="300px"
                   
                    className="img-fluid  rounded-3"
                  />
                </div>
                <div className="px-3">
                  <h2 style={{color: "#1F3F68"}}>
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
                        <span style={{color: "#1F3F68", fontWeight: "bold"}}>Author Name</span>
                        <span className="text-mute">May 5 3min read</span>
                      </Stack>
                    </Col>
                    <Col>
                      <div className="d-flex flex-row justify-content-evenly" style={{color: "#1F3F68", fontWeight: "bold"}}>
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
                  style={{ aspectRatio: "1/0.65" }}
                  width="500px"
                  height="300px"
                   
                    className="img-fluid  rounded-3"
                  />
                </div>
                <div className="px-3">
                  <h2 style={{color: "#1F3F68"}}>
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
                        <span style={{color: "#1F3F68", fontWeight: "bold"}}>Author Name</span>
                        <span className="text-mute">May 5 3min read</span>
                      </Stack>
                    </Col>
                    <Col>
                      <div className="d-flex flex-row justify-content-evenly" style={{color: "#1F3F68", fontWeight: "bold"}}>
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
                  style={{ aspectRatio: "1/0.65" }}
                  width="500px"
                  height="300px"
                   
                    className="img-fluid  rounded-3"
                  />
                </div>
                <div className="px-3">
                  <h2 style={{color: "#1F3F68"}}>
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
                        <span style={{color: "#1F3F68", fontWeight: "bold"}}>Author Name</span>
                        <span className="text-mute">May 5 3min read</span>
                      </Stack>
                    </Col>
                    <Col>
                      <div className="d-flex flex-row justify-content-evenly" style={{color: "#1F3F68", fontWeight: "bold"}}>
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
