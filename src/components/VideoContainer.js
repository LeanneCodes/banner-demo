// src/VideoContainer.js
import React, { useRef, useState } from 'react';
import '../styles/VideoContainer.css';

const VideoContainer = ({ index }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-wrapper">
      <div className="video-container">
        <video
          ref={videoRef}
          width="300"
          height="250"
          muted
          loop
          controls={false}
        >
          <source src={`path_to_your_video${index}.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="play-pause-btn" onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoContainer;
