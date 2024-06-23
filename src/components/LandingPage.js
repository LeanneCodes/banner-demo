// src/components/LandingPage.js
import React from 'react';
import '../styles/LandingPage.css';
import VideoContainer from './VideoContainer';

const videoFiles = [
  { filename: 'audible.mp4', thumbnail: 'audible.png' },
  { filename: 'eurostar.mp4', thumbnail: 'eurostar.png' },
  { filename: 'jameson.mp4', thumbnail: 'jameson.png' },
  { filename: 'legoland.mp4', thumbnail: 'legoland.png' },
  { filename: 'nationwide.mp4', thumbnail: 'nationwide.png' },
  { filename: 'raf.mp4', thumbnail: 'raf.png' }
];

const formatTitle = (filename) => {
  return filename.replace('.mp4', '').replace(/^\w/, c => c.toUpperCase());
};

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container text-center mt-5">
        <h1 className="title">Display Ad Banners</h1>
        <p className="description">Here is a sample of display ad banners I developed using HTML,
          CSS, JavaScript, and Greensock. I create a template with JavaScript and then populate
          it with text and images from an Excel sheet to efficiently produce multiple creative
          variants for my clients.</p>
        <div className="row justify-content-center">
          {videoFiles.map((file, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-5">
              <VideoContainer title={formatTitle(file.filename)} filename={file.filename} thumbnail={file.thumbnail} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
