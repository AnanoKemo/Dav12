import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <span>Blogs</span>
      <Link to="/create" style={{ marginLeft: '20px', textDecoration: 'none', color: 'black' }}>
        Create New Blog
      </Link>
    </div>
  );
}
