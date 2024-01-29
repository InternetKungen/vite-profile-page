import React from 'react';
import './VideoArticle.css';

const VideoArticle = ({ videoId, title, description }) => {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <article className="video-article-container">
      <div className="video-article-container__video">
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src={youtubeEmbedUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      </div>

      <div className="video-article-container__info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default VideoArticle;