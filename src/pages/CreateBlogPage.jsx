import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { BlogContext } from '../context/BlogContext';

export default function CreateBlogPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleCreate = () => {
    if (title.trim() && description.trim()) {
      addBlog({ title, description });
      navigate('/');
    }
  };

  return (
    <>
      <Header />
      <div style={{ marginTop: '60px', padding: '20px' }}>
        <button onClick={() => navigate('/')} style={{ marginBottom: '20px' }}>
          Go Back
        </button>
        <div>
          <h2>Create New Blog</h2>
          <div style={{ marginBottom: '20px' }}>
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginLeft: '10px', padding: '5px', width: '300px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>
              Description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ marginLeft: '10px', padding: '5px', width: '300px' }}
              />
            </label>
          </div>
          <button onClick={handleCreate} style={{ padding: '10px 20px' }}>
            Create
          </button>
        </div>
      </div>
    </>
  );
}
