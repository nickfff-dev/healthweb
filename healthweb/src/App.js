import React from 'react';
import Home from './Home';
import "./App.css"
import Blog from './Blog';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogManager from './BlogManager';
import CreatePost from './CreatePost';
import ManageLogin from './ManageLogin';

function App() {
  return (
   
      
    <Router>
      <Routes>
  
      
        <Route exact path="/" element={<Home />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogmanager" element={<BlogManager />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/manage-login" element={<ManageLogin />} />

        </Routes>
    
      </Router>
   
  );
}

export default App;
