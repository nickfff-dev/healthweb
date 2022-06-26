import React, {useState, useEffect} from 'react';
import Home from './Home';
import "./App.css"
import Blog from './Blog';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogManager from './BlogManager';
import CreatePost from './CreatePost';

import ManageLogin from './ManageLogin';
import ManageRegister from './ManageRegister';

function App() {
  const [posts, setPosts] = useState([])



  return (
   
      
    <Router>
    
      <Routes>
  
      
        <Route exact path="/" element={<Home />} /> 
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogmanager" element={<BlogManager />} />
        <Route path="/manage-login" element={<ManageLogin />} />
        <Route path="/manage-register" element={<ManageRegister />} />
          
        </Routes>
       
      </Router>
   
  );
}

export default App;
