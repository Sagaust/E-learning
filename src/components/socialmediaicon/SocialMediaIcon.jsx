import React from 'react';
import './SocialMediaIcon.css';

const SocialMediaIcon = ({ platform, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`social-icon ${platform}`}>
      <img src={`/icons/${platform}.png`} alt={`${platform} icon`} />
    </a>
  );
}

export default SocialMediaIcon;
