import React from 'react';
import Home from './Home';
import { Container, Row } from "react-bootstrap"
import "./App.css"
import BlogPage2 from './BlogPage2';
import Header from './Header';

function App() {
  return (
    <>
      <div className="band"><Header /></div>
       
   <Container>
      
      <Home />
      </Container>
      
    </>
  );
}

export default App;
