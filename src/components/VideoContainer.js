// src/components/VideoContainer.js
import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import '../styles/VideoContainer.css';

const VideoContainer = ({ title, filename, thumbnail }) => {
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
      <h2 className="video-title">{title}</h2>
      <div className="video-container">
        <video
          ref={videoRef}
          width="300"
          height="250"
          muted
          loop
          controls={false}
          poster={`/thumbnails/${thumbnail}`}
        >
          <source src={`/videos/${filename}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="play-pause-btn" onClick={handlePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default VideoContainer;
