import React from 'react';
import './DiscussionThread.css';

const DiscussionThread = ({ title, posts }) => {
  return (
    <div className="discussion-thread">
      <h3>{title}</h3>
      {posts.map(post => <ForumPost key={post.id} post={post} />)}
    </div>
  );
}

export default DiscussionThread;
