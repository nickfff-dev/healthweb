import React from 'react';
import Home from './Home';
import "./App.css"
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
