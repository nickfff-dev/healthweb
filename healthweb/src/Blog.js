import React, { useEffect } from "react"

import {AwardFill, HospitalFill, HeartPulseFill, JournalMedical, BasketFill, List } from 'react-bootstrap-icons';
import Allposts from "./Allposts";
import Footer from "./Footer";
import Header from "./Header";
import BlogPage2 from "./BlogPage2";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";



function Blog(props) {
  const catToRender = ""

  // const { data } = useQuery(gql`query PostType{posts{id title author category coverImage updatedAt createdAt featured trending body}}`)

  const categoryQuery = gql`query singlecategory($category: String!){singlecategory(category:$category)
    {id title body author category createdAt coverImage featured trending}}`
  
  const { data, refetch } = useQuery(categoryQuery, {
    variables: { category: catToRender },
    })

  useEffect(() => { 
    if (data) {
      console.log(data)
    }

  }, [])
  


  






  


  return (
    <>
      <Header />
    
  <div className="container">
    <div className="row flex-nowrap">
        <div className="col-sm-2 col-auto px-0 collapse collapse-horizontal overflow-hidden" id="sidebar">
            <div className="list-group border-0 text-center text-sm-start min-vh-100" id="sidebar-menu">
              
              <span type="button" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar" onClick={
                () => refetch({ category: "" })
                
            }><JournalMedical/> <span className="d-none d-sm-inline">All Posts</span> </span>
                <span type="button" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar" onClick={
                () => refetch({category:  "Nutrition" })
            }><BasketFill/>  <span className="d-none d-sm-inline">Nutrition</span> </span>
              <span type="button" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar"
              onClick={
                () => refetch({category:  "Well Being" })
            }><HospitalFill /> <span className="d-none d-sm-inline">Well Being</span></span>
              <span type="button" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar"
              onClick={
                () => refetch({category:  "Mental Health" })
            }><HeartPulseFill /> <span className="d-none d-sm-inline">Mental Health</span></span>

              <span type="button" className="list-group-item border-0 d-inline-block text-truncate" data-bs-parent="#sidebar"
              onClick={
                () => refetch({category:  "Product Review" })
            }><AwardFill /> <span className="d-none d-sm-inline">Product Reviews</span></span>
            </div>
        </div>
        <main className="col-sm col border-start ps-md-2 pt-2">
             <span type="button" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border-0 rounded-3 p-1  text-decoration-none"><List size={40} /></span> 
            
        
            {data ? <BlogPage2 data={data} /> : <p>loading popular posts { catToRender}</p>}
            {/* <Allposts data={data} /> */}

            {data ?  <Allposts data={data} /> : <p>loading posts</p>} 
            
           
          </main>
          
        </div>
        
      </div>
      <div ><Footer /></div> 
      </>
  )
}

export default Blog;
