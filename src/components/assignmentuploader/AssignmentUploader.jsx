import React, { useRef } from 'react';
import './AssignmentUploader.css';

const AssignmentUploader = ({ onUpload }) => {
  const fileInputRef = useRef(null);

  const handleUpload = () => {
    const file = fileInputRef.current.files[0];
    if (file && onUpload) {
      onUpload(file);
    }
  }

  return (
    <div className="assignment-uploader">
      <input ref={fileInputRef} type="file" className="file-input" />
      <button onClick={handleUpload} className="upload-btn">Upload Assignment</button>
    </div>
  );
}

export default AssignmentUploader;
