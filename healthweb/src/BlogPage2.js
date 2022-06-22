import React from 'react'
import { Container, Row, Col, Stack } from "react-bootstrap"
import {BookmarkFill, ShareFill} from 'react-bootstrap-icons'




function BlogPage2() { 
  return (
    <>
      <h4>Popular</h4>
      <Container>
    <div className="d-flex align-content-center justify-content-center"> 
       
    
     
        <Row>
          <Col>
            
            <h1 >What Is White Fragility? 5 Key Steps for Overcoming It</h1>
            <p className="py-5">Professor and diversity consultant Robin DiAngelo brought the concept of white fragility into public awareness in “White Fragility:
              Why It’s So Hard for White People to Talk About Racism.</p>
            <div className='d-flex align-items-center justify-content-around flex-row'>
              <Col>
                <Stack gap={2}>
                <span>Author Name</span>
                  <span className="text-mute">May 5 3min read</span>
                  </Stack>
              </Col>
              <Col>
                <div className='d-flex flex-row justify-content-evenly'>
                
                <BookmarkFill className="icon" />
                  <ShareFill className="icon" />
                  </div>
              </Col>
            </div>
          </Col>
          <Col>
            <img src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid  rounded-2"/>
          </Col>
        </Row>
        
      </div>
      </Container>  
 <Container>
      <div className='d-flex flex-row justify-content-between'>
        <Col className="px-3">
          <img src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid  rounded-2 mb-3" />
          <h2>How LGBTQIA+ Elders Can Get the Care and Support They Need</h2>
          <p>In a culture that often centers and exalts the realities of youth, little attention is paid to older queer people and the many intersectional identities they inhabit. The concerns that mark their day-to-day lives are frequently overlooked.</p>
          <div className='d-flex align-items-center justify-content-around flex-row'>
              <Col>
                <Stack gap={2}>
                <span>Author Name</span>
                  <span className="text-mute">May 5 3min read</span>
                  </Stack>
              </Col>
              <Col>
                <div className='d-flex flex-row justify-content-evenly'>
                
                <BookmarkFill className="icon" />
                  <ShareFill className="icon" />
                  </div>
              </Col>
            </div>
        </Col>
        <Col className="px-3">
          <img src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-2 mb-3" />
          <h2>How LGBTQIA+ Elders Can Get the Care and Support They Need</h2>
          <p>In a culture that often centers and exalts the realities of youth, little attention is paid to older queer people and the many intersectional identities they inhabit. The concerns that mark their day-to-day lives are frequently overlooked.</p>
          <div className='d-flex align-items-center justify-content-around flex-row'>
              <Col>
                <Stack gap={2}>
                <span>Author Name</span>
                  <span className="text-mute">May 5 3min read</span>
                  </Stack>
              </Col>
              <Col>
                <div className='d-flex flex-row justify-content-evenly'>
                
                <BookmarkFill className="icon" />
                  <ShareFill className="icon" />
                  </div>
              </Col>
            </div>
        </Col>
        <Col className="px-3">
          <img src="https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid  rounded-2 mb-3" />
          <h2>How LGBTQIA+ Elders Can Get the Care and Support They Need</h2>
          <p>In a culture that often centers and exalts the realities of youth, little attention is paid to older queer people and the many intersectional identities they inhabit. The concerns that mark their day-to-day lives are frequently overlooked.</p>
          <div className='d-flex align-items-center justify-content-around flex-row'>
              <Col>
                <Stack gap={2}>
                <span>Author Name</span>
                  <span className="text-mute">May 5 3min read</span>
                  </Stack>
              </Col>
              <Col>
                <div className='d-flex flex-row justify-content-evenly'>
                
                <BookmarkFill className="icon" />
                  <ShareFill className="icon" />
                  </div>
              </Col>
            </div>
        </Col>
        
      </div>
      
      </Container>
     
      <Container>
        <Col>
          <h3>See all popular articles</h3>
          </Col>
        
      </Container>
      <hr />
      
        
      </>
  )

}

export default BlogPage2;
