import React, { useContext } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { BlogContext } from '../context/BlogContext';

export default function HomePage() {
  const { blogs } = useContext(BlogContext);

  return (
    <>
      <Header />
      <div className="container">
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <Link to={`/blog/${blog.id}`}>
              <button>Show more</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
