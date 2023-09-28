import React from 'react';
import './ResourceViewer.css';

const ResourceViewer = ({ type, src }) => {
  if (type === 'video') {
    return (
      <video className="resource" controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  if (type === 'audio') {
    return (
      <audio className="resource" controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    );
  }

  if (type === 'pdf') {
    return (
      <iframe className="resource" src={src} title="PDF Viewer"></iframe>
    );
  }

  return <p>Unsupported resource type.</p>;
}

export default ResourceViewer;
