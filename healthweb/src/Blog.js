import React, { useState, useEffect } from "react"
import { Container, Col } from "react-bootstrap";
import { ArrowLeftCircle, AwardFill, HospitalFill, HeartPulseFill, JournalMedical, BasketFill, List } from 'react-bootstrap-icons';
import Allposts from "./Allposts";
import Footer from "./Footer";
import Header from "./Header";
import BlogPage2 from "./BlogPage2";



function Blog() {




  return (
    <>
      <Header />
    
  <div className="container">
    <div className="row flex-nowrap">
        <div className="col-sm-2 col-auto px-0 collapse collapse-horizontal overflow-hidden" id="sidebar">
            <div className="list-group border-0 text-center text-sm-start min-vh-100" id="sidebar-menu">
            <a href="#" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><JournalMedical/> <span className="d-none d-sm-inline">All Posts</span> </a>
                <a href="#" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><BasketFill/>  <span className="d-none d-sm-inline">Nutrition</span> </a>
                <a href="#" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><HospitalFill/> <span className="d-none d-sm-inline">Well Being</span></a>
                <a href="#" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><HeartPulseFill/> <span className="d-none d-sm-inline">Mental Health</span></a>

                <a href="#" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><AwardFill/> <span className="d-none d-sm-inline">Product Reviews</span></a>
            </div>
        </div>
        <main className="col-sm col border-start ps-md-2 pt-2">
             <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border-0 rounded-3 p-1  text-decoration-none"><List size={40} /></a> 
            
          
            <BlogPage2 />
            <Allposts />
            
           
          </main>
          
        </div>
        
      </div>
      <div ><Footer /></div> 
      </>
  )
}

export default Blog;
