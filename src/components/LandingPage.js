import React from 'react';
import '../styles/LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container text-center mt-5">
        <h1 className="title">Welcome to Our Landing Page</h1>
        <p className="description">This is a brief description of what our website is about.</p>
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
