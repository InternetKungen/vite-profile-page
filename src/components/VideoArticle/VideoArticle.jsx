import React from 'react';

const VideoArticle = ({ videoId, title, description }) => {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <article>
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src={youtubeEmbedUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default VideoArticle;