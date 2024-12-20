import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import BlogDetailPage from './pages/BlogDetailPage';
import CreateBlogPage from './pages/CreateBlogPage';
import { BlogContext } from './context/BlogContext';

function App() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'Title 1', description: 'Desc 1' },
    { id: 2, title: 'Title 2', description: 'Desc 2' },
    { id: 3, title: 'Title 3', description: 'Desc 3' },
    { id: 4, title: 'Title 4', description: 'Desc 4' },
    { id: 5, title: 'Title 5', description: 'Desc 5' },
    { id: 6, title: 'Title 6', description: 'Desc 6' },
  ]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, { id: blogs.length + 1, ...newBlog }]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/create" element={<CreateBlogPage />} />
        </Routes>
      </Router>
    </BlogContext.Provider>
  );
}

export default App;
