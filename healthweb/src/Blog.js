import React, { useState, useEffect } from "react"
import maskgroup from "./Mask Group.svg"
import BlogPage2 from "./BlogPage2";


import { Container, Button, Col, Row, Nav, NavItem, NavLink, Offcanvas,Navbar, OffcanvasBody, OffcanvasHeader } from "react-bootstrap";
import { ArrowLeftCircle, AwardFill, HospitalFill, HeartPulseFill, JournalMedical, BasketFill, List } from 'react-bootstrap-icons';
import Allposts from "./Allposts";



function Blog() {




  return (
    <>
    
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
           <div className="d-flex flex-row justify-content-between"> <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border-0 rounded-3 p-1  text-decoration-none"><List/></a> <h3>HealthWeb</h3></div>
            <div className="page-header mt-4 pt-3">
              <h2 className="text-center">Explore Our Wide Range of Content</h2>
           
            </div>
          

            <Allposts />
            
        </main>
    </div>
</div>
      </>
  )
}

export default Blog;
