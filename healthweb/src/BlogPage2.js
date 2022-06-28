import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { BookmarkFill, ShareFill } from "react-bootstrap-icons";
import { ArrowRightCircle } from "react-bootstrap-icons";




function BlogPage2(props) {
 
  
  return (
    <Col style={{ padding: "2rem 4rem 4rem" }}>
      <h3 style={{color: "#1F3F68"}}>Popular</h3>
      <Container style={{ padding: "2rem 4rem 4rem" }}>
        {props.data && props.data.singlecategory.slice(0,1).map(post => { 
          return (
            
              <div key={ post.id} className="d-flex align-content-center justify-content-center">
          <Row>
            <Col>
                  <h1 style={{ color: "#1F3F68" }}>{ post.title}</h1>
              <p className="py-5">
               {post.body.substring(0, 100)}
              </p>
              <div className="d-flex align-items-center justify-content-around flex-row">
                <Col>
                  <Stack gap={2}>
                        <span style={{ color: "#1F3F68", fontWeight: "bold" }}>{ post.author}</span>
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
                src={post.coverImage}
                className="img-fluid  rounded-2"
               
                    style={{ aspectRatio: "1/0.65" }}
                    alt={`${post.title}`}
              />
            </Col>
          </Row>
              </div>
             
          )

        })}
      </Container>
      <Container>
        <div className="d-flex flex-row justify-content-between">
          {
            props.data && props.data.singlecategory.slice(1, 3).map(post => { 
              return (
                <Col key={post.id} className="px-3">
            <img
                    src={post.coverImage}
                    className="img-fluid  rounded-2 mb-3"
                    style={{ aspectRatio: "1/0.65" }}
                    alt={`${post.title}`}
            />
            <h2 style={{color: "#1F3F68"}}>{post.title}</h2>
            <p>
              {post.body.substring(0, 100)}
            </p>
            <div className="d-flex align-items-center justify-content-around flex-row">
              <Col>
                <Stack gap={2}>
                        <span style={{ color: "#1F3F68", fontWeight: "bold" }}>{
                          post.author
                        }</span>
                        <span className="text-muted">
                         {post.createdAt} {Math.ceil( (post.body.trim().split(/\s+/).length)/225)}min read
                        </span>
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

              )
            })
          }
      
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
