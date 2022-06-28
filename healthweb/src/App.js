import React from 'react';
import Home from './Home';
import "./App.css"
import Blog from './Blog';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogManager from './BlogManager';
import CreatePost from './CreatePost';
import CreateUser from './CreateUser';
import { useQuery } from "@apollo/client";
import { gql} from "@apollo/client"; 
import ManageLogin from './ManageLogin';
import PostPage from './PostPage';


function App() {


const postsallquery = gql`query PostType{posts{id title body author category createdAt coverImage featured trending}}`

  

  const {  data } = useQuery(postsallquery);

  return (
   
      
    <Router>
    
      <Routes>
  
      
        <Route exact path="/" element={<Home />} /> 
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/contact" element={<Contact />} />
       
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogmanager" element={<BlogManager />} />
        <Route path="/manage-login" element={<ManageLogin />} />
        <Route path="/create-user" element={<CreateUser />} />
        {

          data && data.posts.map(post => {
            return <Route key={post.id} path={`/post/${post.id}`} element={<PostPage post={post} />} />
          })
        }

        
          
        </Routes>
       
      </Router>
   
  );
}

export default App;
