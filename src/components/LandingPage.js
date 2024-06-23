import React from 'react';
import '../styles/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container text-center mt-5">
        <h1 className="title">Display Ad Banners</h1>
        <p className="description">Below is a sample of display ad banners I coded using HTML,
          CSS, JavaScript & Greensock. How I do this is by creating a template using JavaScript and
          then I feed in copy and images from an Excel sheet to mass produce creative variants
          for my clients.</p>
        <div className="row justify-content-center">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-5">
              <div className="grid-item">Container {index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
