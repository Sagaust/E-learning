import React from 'react';
import './ResourceCard.css';

const ResourceCard = ({ resource }) => {
  return (
    <div className="resource-card">
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      <a href={resource.link} target="_blank" rel="noopener noreferrer">Open Resource</a>
    </div>
  );
}

export default ResourceCard;
