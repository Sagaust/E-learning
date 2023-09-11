import React from 'react';
import ResourceCard from '../ResourceCard/ResourceCard';
import './Resources.css';

const Resources = ({ resourceData }) => {
  return (
    <div className="resources">
      <h2>Available Resources</h2>
      {resourceData.map(resource => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}

export default Resources;
