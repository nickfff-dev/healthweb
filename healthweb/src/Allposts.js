import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { BookmarkFill, ShareFill } from "react-bootstrap-icons";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";


function Allposts(props) {

  // if (data) return console.log(data)

  return (
    <Col>
      <h3 style={{color: "#1F3F68"}}>All posts</h3>
      <Col>
        <div className="d-flex flex-column justify-content-evenly">
          { props.data && props.data.singlecategory.map(post => {
          return(          <Container key={post.id} style={{padding: "2rem 4rem 4rem"}}>
          <div className="d-flex flex-row align-items-end justify-content-between">
           
              <div>
                <img
                src={post.coverImage}
                style={{ aspectRatio: "1/0.65" }}
                width="500px"
                height="300px"
                
                  className="img-fluid  rounded-3"
                />
              </div>
              <div className="px-3">
                <h2 style={{color: "#1F3F68"}}>
                 {post.title}
                </h2>
                <p>
                 {post.body.substring(0, 100)}
                  
                </p>
                <div className="d-flex align-items-center justify-content-around flex-row">
                  <Col>
                    <Stack gap={2}>
                      <span style={{ color: "#1F3F68", fontWeight: "bold" }}>{ post.author}</span>
                      <span className="text-mute">{post.createdAt} {Math.ceil( (post.body.trim().split(/\s+/).length)/225)}min read</span>
                   
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
        </Container>)
        })}
         
        </div>
      </Col>
    </Col>
  );
}

export default Allposts;
