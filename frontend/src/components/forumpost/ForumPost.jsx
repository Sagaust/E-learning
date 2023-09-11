import React from 'react';
import './ForumPost.css';

const ForumPost = ({ post }) => {
  return (
    <div className="forum-post">
      <strong>{post.author}</strong>
      <p>{post.content}</p>
    </div>
  );
}

export default ForumPost;
