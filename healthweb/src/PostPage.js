import React from "react"
import { Container, Col, Stack } from "react-bootstrap"
import Footer from "./Footer"
import Header from "./Header"



function PostPage(props) {
  return (
    <Container fluid>
      <Header />
    <div className="blog-single gray-bg">
        <div className="container">
            <div className="row align-items-start">
                <div className="col-lg-8 m-15px-tb">
                    <article className="article">
                        <div className="article-img">
                            <img src={props.post.coverImage} alt="" className="img-fluid"/>
                        </div>
                        <div className="article-title">
                            <h1><a href="#">{props.post.title}</a></h1>
                           
                            <div className="media">
                                <div className="avatar">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" title="" alt=""/>
                                </div>
                                <div className="media-body">
                                    <label>{props.post.author}</label>
                                    <span>{props.post.createdAt}</span>
                                </div>
                            </div>
                        </div>
                        <div className="article-content">
                <p>{ props.post.body}</p>
                            
                        </div>
                     
                    </article>
          
            </div>
        </div>
      </div>
      </div>
      <Footer />
      </Container>
  )
  
}

export default PostPage;
