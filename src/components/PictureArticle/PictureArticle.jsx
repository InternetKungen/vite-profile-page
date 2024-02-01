// PictureArticle.js

import React from 'react';
import './PictureArticle.css';

const PictureArticle = (props) => {
  const { imageSrc, text, appLink, githubLink, theme } = props;

  const containerClass = theme === 'dark' ? 'article-container dark' : 'article-container';
  const infoClass = theme === 'dark' ? 'article-info dark' : 'article-info';

  return (
    <div className={containerClass}>
      <img src={imageSrc} alt="Article" className="article-image" />
      <div className={infoClass}>
        <p>{text}</p>
        <a href={appLink} target="_blank" rel="noopener noreferrer">Application Link</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
      </div>
    </div>
  );
};

export default PictureArticle;
