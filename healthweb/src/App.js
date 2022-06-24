import React from 'react';
import Home from './Home';
import "./App.css"
import Blog from './Blog';
import Contact from './Contact';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
   
      
    <Router>
      <Routes>
  
      
        <Route exact path="/" element={<Home />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        </Routes>
    
      </Router>
   
  );
}

export default App;
