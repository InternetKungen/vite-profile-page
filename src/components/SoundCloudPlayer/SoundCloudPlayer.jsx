import React from 'react';
import './SoundCloudPlayer.css';

function SoundCloudPlayer ({source}) {
  return (
    <div className="soundcloud-player-container">
      <iframe
        title="soundcloud-player"
        width="100%"
        height="130"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={source}
      ></iframe>
      {/* <iframe 
      width="100%" 
      height="166" 
      scrolling="no" 
      frameborder="no" 
      allow="autoplay" 
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1563351691&color=%23453f54&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
        </iframe>
        <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
            <a href="https://soundcloud.com/gr0gg0" title="gr0gg0" target="_blank" style="color: #cccccc; text-decoration: none;">gr0gg0</a> · <a href="https://soundcloud.com/gr0gg0/vowel-thing" title="Vowel Thing" target="_blank" style="color: #cccccc; text-decoration: none;">Vowel Thing</a></div> */}
    
    </div>
  );
};

export default SoundCloudPlayer;