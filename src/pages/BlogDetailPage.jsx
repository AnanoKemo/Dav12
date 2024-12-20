import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetailPage.css';
import Header from '../components/Header';
import { BlogContext } from '../context/BlogContext';

const BlogDetailPage = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find((b) => b.id === Number(id));

  return (
    <>
      <Header />
      <div className="blog-detail-page">
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        <Link to="/">Go Back</Link>
      </div>
    </>
  );
};

export default BlogDetailPage;
