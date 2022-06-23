import React from 'react';
import Home from './Home';
import { Container, Row } from "react-bootstrap"
import "./App.css"
import BlogPage2 from './BlogPage2';
import Header from './Header';
import Blog from './Blog';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
   
      
    <Router>
      <Routes>
  
      
        <Route exact path="/" element={<Home />} /> 
        <Route path="/blog" element={<Blog />} />
        </Routes>
    
      </Router>
   
  );
}

export default App;
