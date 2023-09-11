import React, { useState } from 'react';
import './PostCreator.css';

const PostCreator = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (title && content) {
      onSubmit({ title, content });
      setTitle('');
      setContent('');
    }
  }

  return (
    <div className="post-creator">
      <h2>Create Post</h2>
      <input 
        type="text" 
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Post Title"
      />
      <textarea 
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Post Content"
      ></textarea>
      <button onClick={handleSubmit}>Submit Post</button>
    </div>
  );
}

export default PostCreator;
